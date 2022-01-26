import { MovieDetails } from "../utils/types";

export const Card = (props: MovieDetails) => {
  return (
    <div
      style={{
        width: 800,
        height: 520,
        background: "rgba( 255, 255, 255, 0.1)",
        backdropFilter: "blur(160px)", 
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin:'auto',
        justifyContent: "center",
      }}
    >
      <img
        src={props.Poster}
        alt="movie poster"
        width="500"
        height="520"
        style={{
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      />
      <div style={{ padding: 15 }}>
        <h2>
          {props.Title} <span> ({props.Year}) </span>
        </h2>
        <p>{props.Plot}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3>Ratings</h3>
            {props.Ratings &&
              props.Ratings.map((rating) => (
                <div key={rating.Source}>
                  <p>{rating.Source}</p>
                  <p>{rating.Value}</p>
                </div>
              ))}
          </div>
          <div>
            <h3>Actors</h3>
            <p style={{ width: 200 }}>{props.Actors}</p>
            <h3>Language</h3>
            <p style={{ width: 200 }}>{props.Language}</p>
            <h3>Awards</h3>
            <p style={{ width: 200 }}>{props.Awards}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
