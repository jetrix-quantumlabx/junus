import React from "react";

export default function Twitter({
  width = 18,
  height = 18,
  fill = "#273039",
}: {
  width?: number;
  height?: number;
  fill?: string;
  [x: string]: any;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6536 1.6875H16.1346L10.7144 7.8825L17.0909 16.3125H12.0974L8.18688 11.1997L3.71238 16.3125H1.22988L7.02738 9.68625L0.911133 1.6875H6.02988L9.56463 6.36075L13.6521 1.6875M12.7814 14.8275H14.1561L5.28363 3.0945H3.80838L12.7829 14.8275"
        fill={fill}
      />
    </svg>
  );
}
