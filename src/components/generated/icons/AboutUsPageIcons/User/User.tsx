/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const User = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`user ${className}`}
      fill="none"
      height="49"
      viewBox="0 0 48 49"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M33.208 22.5961C34.416 20.5381 34.952 18.1401 34.71 15.7161C34.352 12.1481 32.36 8.99406 29.104 6.83606L26.894 10.1681C29.132 11.6521 30.494 13.7661 30.73 16.1161C30.95 18.3261 30.17 20.5041 28.586 22.0881L26.202 24.4721L29.438 25.4221C37.902 27.9021 38 36.4141 38 36.5001H42C42 32.9221 40.088 25.9301 33.208 22.5961Z"
        fill="white"
      />
      <path
        className="path"
        d="M19 24.5C23.412 24.5 27 20.912 27 16.5C27 12.088 23.412 8.5 19 8.5C14.588 8.5 11 12.088 11 16.5C11 20.912 14.588 24.5 19 24.5ZM19 12.5C21.206 12.5 23 14.294 23 16.5C23 18.706 21.206 20.5 19 20.5C16.794 20.5 15 18.706 15 16.5C15 14.294 16.794 12.5 19 12.5ZM22 26.5H16C9.382 26.5 4 31.882 4 38.5V40.5H8V38.5C8 34.088 11.588 30.5 16 30.5H22C26.412 30.5 30 34.088 30 38.5V40.5H34V38.5C34 31.882 28.618 26.5 22 26.5Z"
        fill="white"
      />
    </svg>
  );
};
