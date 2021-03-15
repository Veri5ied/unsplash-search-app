import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./UserPhotos.css";

function UserPhotos() {
  const [userPhotos, setUserPhotos] = useState([]);
  const { username } = useParams();
  const accesskey = "AEbuzISbvALlvoN-X6Zoj-um36KXKln9Ys_oO5IygvE";

  useEffect(() => {
    const fetchUserPhotos = async () => {
      try {
        const url = `https://api.unsplash.com/users/${username}/photos?page=1&client_id=${accesskey}`;
        const res = await axios.get(url);
        setUserPhotos(res.data);
      } catch (error) {
        console.log({ error });
      }
    };

    fetchUserPhotos();
  }, [username]);

  return (
    <div className="container">
      <div className="user__heading">
        <h3 className="user__photos">
          <span className="user__username">{username}'s</span> Photos
        </h3>

        <Link to="/">Back</Link>
      </div>
      <div className="user__photos__list">
        {userPhotos.map((photo) => (
          <div className="user__photo" key={photo.id}>
            <img
              src={photo.urls.thumb}
              alt={photo.alt_description}
              className="photo"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPhotos;
