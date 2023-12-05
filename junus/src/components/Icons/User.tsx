import React from "react";

export default function User({
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
        d="M9.225 9.165C9.62518 8.8186 9.94616 8.39016 10.1662 7.90877C10.3861 7.42737 10.5 6.90428 10.5 6.375C10.5 5.38044 10.1049 4.42661 9.40165 3.72335C8.69839 3.02009 7.74456 2.625 6.75 2.625C5.75544 2.625 4.80161 3.02009 4.09835 3.72335C3.39509 4.42661 3 5.38044 3 6.375C2.99999 6.90428 3.11385 7.42737 3.33384 7.90877C3.55384 8.39016 3.87482 8.8186 4.275 9.165C3.22511 9.64041 2.33435 10.4081 1.70924 11.3764C1.08412 12.3447 0.751104 13.4725 0.75 14.625C0.75 14.8239 0.829018 15.0147 0.96967 15.1553C1.11032 15.296 1.30109 15.375 1.5 15.375C1.69891 15.375 1.88968 15.296 2.03033 15.1553C2.17098 15.0147 2.25 14.8239 2.25 14.625C2.25 13.4315 2.72411 12.2869 3.56802 11.443C4.41193 10.5991 5.55653 10.125 6.75 10.125C7.94347 10.125 9.08807 10.5991 9.93198 11.443C10.7759 12.2869 11.25 13.4315 11.25 14.625C11.25 14.8239 11.329 15.0147 11.4697 15.1553C11.6103 15.296 11.8011 15.375 12 15.375C12.1989 15.375 12.3897 15.296 12.5303 15.1553C12.671 15.0147 12.75 14.8239 12.75 14.625C12.7489 13.4725 12.4159 12.3447 11.7908 11.3764C11.1657 10.4081 10.2749 9.64041 9.225 9.165ZM6.75 8.625C6.30499 8.625 5.86998 8.49304 5.49997 8.24581C5.12996 7.99857 4.84157 7.64717 4.67127 7.23604C4.50097 6.8249 4.45642 6.3725 4.54323 5.93605C4.63005 5.49959 4.84434 5.09868 5.15901 4.78401C5.47368 4.46934 5.87459 4.25505 6.31105 4.16823C6.7475 4.08142 7.1999 4.12597 7.61104 4.29627C8.02217 4.46657 8.37357 4.75496 8.62081 5.12497C8.86804 5.49498 9 5.92999 9 6.375C9 6.97174 8.76295 7.54403 8.34099 7.96599C7.91903 8.38795 7.34674 8.625 6.75 8.625ZM14.055 8.865C14.535 8.3245 14.8485 7.65679 14.9579 6.94225C15.0672 6.22772 14.9677 5.49681 14.6713 4.8375C14.375 4.17819 13.8943 3.6186 13.2874 3.22607C12.6804 2.83354 11.9729 2.62481 11.25 2.625C11.0511 2.625 10.8603 2.70402 10.7197 2.84467C10.579 2.98532 10.5 3.17609 10.5 3.375C10.5 3.57391 10.579 3.76468 10.7197 3.90533C10.8603 4.04598 11.0511 4.125 11.25 4.125C11.8467 4.125 12.419 4.36205 12.841 4.78401C13.2629 5.20597 13.5 5.77826 13.5 6.375C13.4989 6.76893 13.3945 7.15568 13.197 7.49657C12.9996 7.83745 12.7162 8.12054 12.375 8.3175C12.2638 8.38164 12.1709 8.47325 12.1053 8.58356C12.0396 8.69386 12.0034 8.81918 12 8.9475C11.9969 9.07482 12.0262 9.20085 12.0852 9.31369C12.1443 9.42654 12.2311 9.52249 12.3375 9.5925L12.63 9.7875L12.7275 9.84C13.6315 10.2688 14.3942 10.947 14.9257 11.7947C15.4572 12.6425 15.7354 13.6245 15.7275 14.625C15.7275 14.8239 15.8065 15.0147 15.9472 15.1553C16.0878 15.296 16.2786 15.375 16.4775 15.375C16.6764 15.375 16.8672 15.296 17.0078 15.1553C17.1485 15.0147 17.2275 14.8239 17.2275 14.625C17.2336 13.4741 16.9454 12.3407 16.3901 11.3325C15.8348 10.3244 15.031 9.47498 14.055 8.865Z"
        fill={fill}
      />
    </svg>
  );
}
