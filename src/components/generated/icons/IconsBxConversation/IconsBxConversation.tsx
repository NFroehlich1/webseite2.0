/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconsBxConversation = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icons-bx-conversation ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 30 30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M20 17.5H20.625C21.6588 17.5 22.5 16.6587 22.5 15.625V4.375C22.5 3.34125 21.6588 2.5 20.625 2.5H4.375C3.34125 2.5 2.5 3.34125 2.5 4.375V16.25V17.5V22.5L9.16625 17.5H16.25H20ZM8.33375 15L5 17.5V16.25V5H20V15H16.25H8.33375Z"
        fill="white"
      />
      <path
        className="path"
        d="M25.625 10H25V12.5V15.7325V17.5013C25 18.8763 23.8837 19.9925 22.5125 20H21.6663H20H13.75H12.5H10V20.625C10 21.6587 10.8412 22.5 11.875 22.5H12.5H13.75H20H20.8337L27.5 27.5V22.5V21.25V18.7513V16.2487V11.875C27.5 10.8412 26.6588 10 25.625 10Z"
        fill="white"
      />
    </svg>
  );
};
