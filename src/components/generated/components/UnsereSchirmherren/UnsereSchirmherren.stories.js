import { UnsereSchirmherren } from ".";

export default {
  title: "Components/UnsereSchirmherren",
  component: UnsereSchirmherren,
  argTypes: {
    property1: {
      options: ["variant-4", "variant-2", "variant-3", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-4",
    className: {},
    group: "../../../../resources/Jivka_Ovtcharova.jpg",
    img: "../../../../resources/Michael_Feindt.jpg",
    group1: "../../../../resources/GDS.jpg",
  },
};
