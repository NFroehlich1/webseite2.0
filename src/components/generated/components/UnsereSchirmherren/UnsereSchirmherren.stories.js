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
    group: "../../../../resources/group-48095450-3.png",
    img: "../../../../resources/group-48095450-4.png",
    group1: "../../../../resources/group-48095450-5.png",
  },
};
