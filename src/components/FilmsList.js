import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FilmsList() {
  const [films, setFilms] = useState([]);

  // Objeto con URLs de imágenes asociadas a los títulos
  const filmImages = {
    "Castle in the Sky": "https://c4.wallpaperflare.com/wallpaper/54/556/1009/movie-laputa-castle-in-the-sky-wallpaper-preview.jpg",
    "Grave of the Fireflies": "https://images8.alphacoders.com/781/781663.jpg",
    "My Neighbor Totoro": "https://alpha.creativecirclecdn.com/chestnuthilllocal/original/20240403-211625-totoro.jpeg",
    "Kiki's Delivery Service": "https://c4.wallpaperflare.com/wallpaper/281/476/21/movie-kiki-s-delivery-service-wallpaper-preview.jpg",
    "Only Yesterday": "https://images3.alphacoders.com/134/1347803.png",
    "Porco Rosso": "https://c4.wallpaperflare.com/wallpaper/479/70/344/ghibli-porco-rosso-wallpaper-preview.jpg",
    "Pom Poko": "https://images.alphacoders.com/809/809764.jpg",
    "Whisper of the Heart": "https://c4.wallpaperflare.com/wallpaper/565/801/136/movie-whisper-of-the-heart-wallpaper-preview.jpg",
    "Princess Mononoke": "https://images4.alphacoders.com/798/798713.jpg",
    "My Neighbors the Yamadas": "https://c4.wallpaperflare.com/wallpaper/598/594/338/movie-my-neighbors-the-yamadas-wallpaper-preview.jpg",
    "Spirited Away": "https://images5.alphacoders.com/113/1138409.jpg",
    "The Cat Returns": "https://c4.wallpaperflare.com/wallpaper/249/889/160/movie-the-cat-returns-wallpaper-preview.jpg",
    "Howl's Moving Castle": "https://images4.alphacoders.com/195/195118.jpg",
    "Tales from Earthsea": "https://images4.alphacoders.com/195/19558.jpg",
    "Ponyo": "https://images6.alphacoders.com/793/793460.jpg",
    "Arrietty": "https://c4.wallpaperflare.com/wallpaper/1012/444/942/movie-the-secret-world-of-arrietty-wallpaper-preview.jpg",
    "From Up on Poppy Hill": "https://c4.wallpaperflare.com/wallpaper/178/884/897/movie-from-up-on-poppy-hill-wallpaper-preview.jpg",
    "The Wind Rises": "https://c4.wallpaperflare.com/wallpaper/988/270/376/the-wind-rises-wallpaper-preview.jpg",
    "The Tale of the Princess Kaguya": "https://c4.wallpaperflare.com/wallpaper/144/384/44/movie-the-tale-of-the-princess-kaguya-wallpaper-preview.jpg",
    "When Marnie Was There": "https://wallpapercave.com/wp/wp7098606.jpg",
    "The Red Turtle": "https://c4.wallpaperflare.com/wallpaper/870/657/294/movie-the-red-turtle-anime-red-wallpaper-preview.jpg",
    "Earwig and the Witch": "https://ghiblicollection.com/cdn/shop/products/EarwigSB_Cover_72dpi.png?v=1675275595" 
  };
  

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((response) => response.json())
      .then((data) => setFilms(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Studio Ghibli Films</h1>
      <div className="row">
        {films.map((film) => (
          <div className="col-md-4 mb-4" key={film.id}>
            <div className="card">
              {}
              <img
                src={filmImages[film.title] || "https://via.placeholder.com/300x200?text=No+Image"}
                alt={film.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <p className="card-text">
                  {film.description.slice(0, 100)}...
                </p>
                <Link to={`/films/${film.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmsList;

