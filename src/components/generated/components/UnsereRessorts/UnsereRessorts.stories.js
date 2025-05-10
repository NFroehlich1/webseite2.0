import { UnsereRessorts } from ".";

export default {
  title: "Components/UnsereRessorts",
  component: UnsereRessorts,
  argTypes: {
    property1: {
      options: ["default", "variant-5", "variant-2", "variant-3", "variant-4", "variant-7", "variant-6"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    iconBoxClassName: {},
    iconBoxClassNameOverride: {},
    divider: "../../../../resources/divider-18.svg",
    dividerClassName: {},
    img: "../../../../resources/divider-19.svg",
    dividerClassNameOverride: {},
    divider1: "../../../../resources/divider-20.svg",
  },
};
