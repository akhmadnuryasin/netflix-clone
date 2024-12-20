import React, { useEffect } from "react";
import "./Player.css";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [apiData, setApiData] = React.useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmI1YjU5MmQyZWZhOGNmNGI3NTI4MTAwNDgyOTFiNiIsIm5iZiI6MTczMjk5NDA2Ny40MzcsInN1YiI6IjY3NGI2NDEzNGRjZmVkMTU5YWNmNWNkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0JWAbIuJV55TvwrGm735Qj2zK6UBRtCU2F_1HIjo7Uo",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        onClick={() => navigate(-1)}
        src="/back_arrow_icon.png"
        alt="Back Arrow"
      />
      <iframe
        width={"90%"}
        height={"90%"}
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder={0}
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
