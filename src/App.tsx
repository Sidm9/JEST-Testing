/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { useGetMovieDetailsMutation } from "./redux/services/movieSlice";
export const App: React.FC = () => {
  const [state, setState] = useState("");

  const [getMovieDetails, { data: data2 }] = useGetMovieDetailsMutation();

  const showMovieDetails = () => {
    getMovieDetails({ Title: state });
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        // alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        color: "whitesmoke",
        width: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 3,
        }}
      >
        <h1 style={{ color: "whitesmoke" }}>OMDB SEARCH</h1>
        <Form
          // data={data}
          state={state}
          setState={(x) => setState(x)}
          showMovieDetails={showMovieDetails}
          // HandleSearchQuery={(state: any) => {
          //   HandleSearchQuery(state);
          //   console.log("State:", state);
          // }}
          disabled={state.trim().length === 0}
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "50%",
          borderLeft: "2px solid white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data2 && (
          <Card
            Title={data2.Title}
            Plot={data2.Plot}
            Poster={data2.Poster}
            Ratings={data2.Ratings}
            Year={data2.Year}
            Type={data2.Type}
            Actors={data2.Actors}
            Language={data2.Language}
            Awards={data2.Awards}
          />
        )}
      </div>
    </div>
  );
};
