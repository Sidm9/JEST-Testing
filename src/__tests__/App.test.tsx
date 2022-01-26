import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { App } from "../App";
import { Form } from "../components/Form";
import { store } from "../redux/store";

const MockForm = () => {
  return (
    <Provider store={store}>
      <App>
        <Form
          state={""}
          setState={jest.fn()}
          showMovieDetails={jest.fn()}
          disabled={expect.any(Boolean)}
        />
      </App>
    </Provider>
  );
};

describe("Form", () => {
  it("Renders Input", () => {
    render(<MockForm />);
    const Input = screen.getByPlaceholderText(/Enter Movie Name/i);
    expect(Input).toBeInTheDocument();
  });

  it("Input SetState Test", () => {
    render(<MockForm />);
    const InputElement = screen.getByPlaceholderText(/Enter Movie Name/i);
    fireEvent.change(InputElement, { target: { value: "test" } });
    expect((InputElement as HTMLInputElement).value).toBe("test");
  });

  it("Empty Input after button has been clicked", () => {
    render(<MockForm />);
    const InputElement = screen.getByPlaceholderText(/Enter Movie Name/i);
    fireEvent.change(InputElement, { target: { value: "test" } });
    const Button = screen.getByTestId(/Submit/i);
    fireEvent.click(Button);
    expect((InputElement as HTMLInputElement).value).toBe("");
  });

  it("Button disabled if input is empty", () => {
    render(<MockForm />);
    const Button = screen.getByTestId(/Submit/i);
    const InputElement = screen.getByPlaceholderText(/Enter Movie Name/i);
    fireEvent.change(InputElement, { target: { value: "" } });
    expect(Button).toBeDisabled();
  });
});
