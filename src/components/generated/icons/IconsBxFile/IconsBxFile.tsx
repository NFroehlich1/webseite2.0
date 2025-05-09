/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconsBxFile = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icons-bx-file ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.5855 7.15484C16.5447 7.0665 16.4938 6.98234 16.4222 6.91067L11.4222 1.91067C11.3505 1.839 11.2663 1.78817 11.178 1.74734C11.153 1.73567 11.1263 1.729 11.0997 1.71984C11.0297 1.6965 10.958 1.6815 10.8838 1.67734C10.8663 1.67567 10.8505 1.6665 10.833 1.6665H4.99967C4.08051 1.6665 3.33301 2.414 3.33301 3.33317V16.6665C3.33301 17.5857 4.08051 18.3332 4.99967 18.3332H14.9997C15.9188 18.3332 16.6663 17.5857 16.6663 16.6665V7.49984C16.6663 7.48234 16.6572 7.4665 16.6555 7.44817C16.6513 7.374 16.6372 7.30234 16.613 7.23234C16.6047 7.20567 16.5972 7.17984 16.5855 7.15484ZM13.8213 6.6665H11.6663V4.5115L13.8213 6.6665ZM4.99967 16.6665V3.33317H9.99967V7.49984C9.99967 7.96067 10.3722 8.33317 10.833 8.33317H14.9997L15.0013 16.6665H4.99967Z"
        fill="white"
        fillOpacity="0.5"
      />
      <path
        className="path"
        d="M6.66699 9.99984H13.3337V11.6665H6.66699V9.99984ZM6.66699 13.3332H13.3337V14.9998H6.66699V13.3332ZM6.66699 6.6665H8.33366V8.33317H6.66699V6.6665Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
};
