import { PropertyLWrapper } from ".";

export default {
  title: "Components/PropertyLWrapper",
  component: PropertyLWrapper,
  argTypes: {
    property1: {
      options: ["l", "m", "s"],
      control: { type: "select" },
    },
    property2: {
      options: ["solid", "outline"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "l",
    property2: "solid",
    className: {},
    btnTextClassName: {},
    text: "Button M",
  },
};
