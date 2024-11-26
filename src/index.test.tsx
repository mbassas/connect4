import { render, screen } from "@testing-library/react";
import Game from "./components/Game";
import { Provider } from "react-redux";
import { store } from "./store";

test("renders Game", () => {
  render(
    <Provider store={store}>
      <Game />
    </Provider>
  );
  const linkElement = screen.getByText(/MENU/i);
  expect(linkElement).toBeInTheDocument();
});
