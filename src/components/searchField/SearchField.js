import React, { useState } from "react";
import axios from "axios";
import "./SearchField.css";

function SeacrhField() {
  const [image, setImage] = useState("");
  const [result, setResult] = useState([]);

  const accesskey =
    "aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5";

  const handleChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = () => {
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      image +
      "&client_id=" +
      accesskey;

    axios.get(url).then((res) => {
      setResult(res.data.results);
    });
  };
  return (
    <div className="search__body">
      <div className="search__heading">
        <h1>Unsplash Search App</h1>
      </div>
      <div className="search__input">
        <input
          onChange={handleChange}
          type="text"
          name="image"
          className="input__field"
          placeholder="search for an image"
        />
        <button onSubmit={handleSubmit} type="submit">
          Search
        </button>
      </div>

      <div className="search__result">
        {result.map((image) => (
          <>
            <div className="card__list">
              <img src={image.urls.thumb} alt="" />
              <p className="card__image__name">Photo by {image.user.name}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default SeacrhField;
