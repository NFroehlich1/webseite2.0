import { Btn } from ".";

export default {
  title: "Components/Btn",
  component: Btn,
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
    text: "Button S",
  },
};
