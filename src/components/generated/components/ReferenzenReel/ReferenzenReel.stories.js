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
    referenzRechts: "../../../../resources/referenz-rechts.svg",
    referenzLinks: "../../../../resources/referenz-links.svg",
    referenzMitteClassName: {},
    referenzMitte: "../../../../resources/referenz-mitte.svg",
  },
};
