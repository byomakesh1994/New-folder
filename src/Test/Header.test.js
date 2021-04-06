import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Render With out Error", () => {
  it("it should render once", () => {
    const component = shallow(<Header />);
    const wrapper = component.find(".logo");
    expect(wrapper.length).toBe(1);
  });
});
