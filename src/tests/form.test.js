import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "../components/Form";

const onSubmit = jest.fn();

const setup = () => {
  const utils = render(<Form onSubmit={onSubmit} />);
  const inputUsername = utils.getByLabelText("username");
  const submitButton = utils.getByRole("button");

  return {
    inputUsername,
    submitButton,
    ...utils
  };
};

test("It should start with uppercase", () => {
  const { inputUsername } = setup();
  fireEvent.change(inputUsername, { target: { value: "m" } });
  expect(inputUsername.value).toBe("m");
});

test("The submit button should be clicked once", () => {
  const { submitButton } = setup();

  fireEvent.click(submitButton);
  // The mock function is called once
  expect(onSubmit.mock.calls.length).toBe(1);
});
