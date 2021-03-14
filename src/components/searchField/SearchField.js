import React, { useState } from "react";
import axios from "axios";
import "./SearchField.css";

function SeacrhField() {
  const [user, setUser] = useState("");
  const [result, setResult] = useState([]);

  const accesskey = "AEbuzISbvALlvoN-X6Zoj-um36KXKln9Ys_oO5IygvE";

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleClick = () => {
    const url = `https://api.unsplash.com/search/users?page=4&query=${user}&client_id=${accesskey}`;

    axios
      .get(url)
      .then((res) => {
        setResult(res.data.results);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="search__body">
      <div className="search__heading">
        <h1>Unsplash User Search App</h1>
      </div>
      <div className="search__input">
        <input
          onChange={handleChange}
          type="text"
          name="image"
          value={user}
          className="input__field"
          placeholder="Search for a user"
        />
        <button onClick={handleClick} type="submit">
          Search
        </button>
      </div>

      <div className="search__result">
        {result.map((user) => (
          <>
            <div className="card__list">
              <img src={user.profile_image.large} alt="" />
              <p className="card__image__name">Username: {user.username}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default SeacrhField;
