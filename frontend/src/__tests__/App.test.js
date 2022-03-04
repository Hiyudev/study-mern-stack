import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import App from "../App";

describe("User entering the website for the first time", () => {
  it("should redirect the user to the login page", async () => {
    const { queryAllByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const els = await queryAllByText(/Login/i);
    expect(els.length).toBe(2);
  });
});
