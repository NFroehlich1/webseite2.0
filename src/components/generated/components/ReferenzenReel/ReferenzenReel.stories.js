import { ReferenzenReel } from ".";

export default {
  title: "Components/ReferenzenReel",
  component: ReferenzenReel,
  argTypes: {
    property1: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    referenzRechts: "/img/referenz-rechts.svg",
    referenzLinks: "/img/referenz-links.svg",
    referenzMitteClassName: {},
    referenzMitte: "/img/referenz-mitte.svg",
  },
};
