import { useCallback } from "react";
import { useGetMovieBySearchMutation } from "../redux/services/movieSlice";

interface IFormProps {
  state: string;
  setState: (state: string) => void;
  showMovieDetails: (id: string) => void;
  disabled: boolean
}

export const Form = (props: IFormProps) => {


  const [searchMovie, { data, isLoading }] = useGetMovieBySearchMutation();

      
  const debounce = (callback: Function, delay: number) => {
    // console.log("Called");
    let timer: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), delay);      
    };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const HandleSearchQuery = useCallback(
    debounce(
      (state: string) =>
        state.trim().length !== 0 && searchMovie({ Title: state }),
      200
    ),
    []
  );

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // showMovieDetails();
        }}
      >
        <input
          list="movies"
          id="movieSearch"
          value={props.state}
          onChange={(e) => {
            (props.setState(e.target.value));
              HandleSearchQuery(e.target.value);
          }}
          type="text"
          style={{
            backgroundColor: "#24292E",
            width: 380,
            padding: 10,
            borderRadius: 8,
            outline: "none",
            color: "whitesmoke",
            borderColor: "24292E",
            fontSize: 20,
          }}
          placeholder="Enter Movie Name"
        />
        <datalist
          id="movies"
          style={{
            color: "white",
            width: 380,
            padding: 10,
            borderRadius: 8,
            outline: "none",
            borderColor: "24292E",
          }}
        >
          {data?.Search &&
            data?.Search.map((movie) => (
              <option
                key={movie.imdbID}
                style={{ color: "white" }}
                value={movie.Title}
              >
                {movie.Title}
              </option>
            ))}
        </datalist>
        <button
          data-testid="Submit"
          disabled={props.disabled}
          onClick={(e) => {
            e.preventDefault();
            props.showMovieDetails(props.state);
            props.setState("")
            // props.showMovieDetails();
          }}
        >
          Search
        </button>
      </form>
      <div style={{height:20}}>{isLoading ? "Loading..." : " "}</div>
    </>
  );
}