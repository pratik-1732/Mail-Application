import React from "react";
import { shallow } from "enzyme"; // Enzyme helps with rendering React components for testing
import App from "./App"; // Assuming your main app component is in App.js

describe("App component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
