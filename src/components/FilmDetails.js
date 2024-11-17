import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function FilmDetails() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [details, setDetails] = useState({
    people: [],
    species: [],
    locations: [],
    vehicles: [],
  });

  const fetchDetails = async (key, urls) => {
    if (urls.length > 0) {
      try {
        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const detailsData = await Promise.all(responses.map((res) => res.json()));
        setDetails((prev) => ({ ...prev, [key]: detailsData }));
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetch(`https://ghibliapi.vercel.app/films/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFilm(data);
        fetchDetails("people", data.people);
        fetchDetails("species", data.species);
        fetchDetails("locations", data.locations);
        fetchDetails("vehicles", data.vehicles);
      });
  }, [id]);

  if (!film) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">{film.title}</h1>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Description</h5>
          <p className="card-text">{film.description}</p>
        </div>
      </div>

      <h3>Details</h3>
      <div className="row">
        {["people", "species", "locations", "vehicles"].map((key) => (
          <div className="col-md-6 mb-3" key={key}>
            <div className="card">
              <div className="card-header">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
              <div className="card-body">
                {details[key]?.length > 0 ? (
                  <ul className="list-group">
                    {details[key].map((item) => (
                      <li key={item.id} className="list-group-item">
                        {item.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No {key} available.</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/" className="btn btn-secondary mt-4">
        Back to Films
      </Link>
    </div>
  );
}

export default FilmDetails;
