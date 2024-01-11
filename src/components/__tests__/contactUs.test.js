import { render, screen } from "@testing-library/react";
import ContactUs from "../Contact-Us";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  test("Should Load Contact Us Component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });


  //it is just an alias for test 
  it("Should load button inside Contact Us Component", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact Component", () => {
    //Rendering
    render(<ContactUs />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Asserting
    expect(inputBoxes.length).toBe(2);
  });
});
