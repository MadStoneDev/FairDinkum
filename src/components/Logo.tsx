﻿interface LogoProps {
  fairClassName?: string;
  dinkumClassName?: string;
  blockClassName?: string;
  className?: string;
  props?: any;
}

export default function Logo({
  fairClassName = "fill-black",
  dinkumClassName = "fill-white",
  blockClassName = "fill-amber-500",
  className = "",
  props = null,
}: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      x={0}
      y={0}
      style={{
        enableBackground: "new 0 0 280 70",
      }}
      viewBox="0 0 280 70"
      className={className}
      {...props}
    >
      <path className={blockClassName} d="M84.61 6H275v59H84.61z" />
      <path
        className={fairClassName}
        d="M9.26 54V29.8H5v-3.15h4.26c0-7.5 3.56-10.15 10.52-10.3v3.25h-.1c-4.86 0-6.91 2-6.91 6.85v.2h7.02v3.15h-7.02V54H9.26zM47.39 54v-4.8h-.1c-2.25 3.4-6.21 5.45-10.67 5.45-8.22 0-14.73-6.2-14.73-14.4s6.71-14.3 14.73-14.3c4.56 0 8.47 2.05 10.67 5.5h.1v-4.8h3.51V54h-3.51zm.2-13.65c0-6.1-4.81-11.25-11.02-11.25-6.31 0-11.17 4.8-11.17 11.3 0 6.3 4.76 11.1 11.22 11.1 6.11 0 10.97-5 10.97-11.15zM57.26 23.3V17h3.51v6.3h-3.51zm0 30.7V26.65h3.51V54h-3.51zM67.28 54V26.65h3.51v3.95h.1c1.2-2.85 3.31-4.4 7.72-4.65v3.7h-.05c-5.06.5-7.77 3.8-7.77 8.2V54h-3.51z"
      />
      <path
        className={dinkumClassName}
        d="M115.08 53.65V49.7h-.1c-2.15 3-5.76 4.65-9.82 4.65-8.07 0-14.43-6.1-14.43-14.25 0-8.45 6.01-14.9 14.28-14.9 3.76 0 7.32 1.35 9.57 4.15h.1v-12.7h5.21v37h-4.81zm-9.67-23.7c-5.31 0-9.47 4.45-9.47 9.9 0 5.2 4.26 9.75 9.47 9.75 5.26 0 9.67-4.3 9.67-9.55 0-5.65-3.81-10.1-9.67-10.1zM126.6 22.75v-6.1h5.21v6.1h-5.21zm0 30.9v-27.7h5.21v27.7h-5.21zM157.91 53.65v-15.1c0-5.85-2.3-8.6-6.91-8.6-4.56 0-7.31 3.35-7.31 8.55v15.15h-5.21v-27.7h4.86v2.95h.1c2.05-2.65 4.91-3.7 8.12-3.7 6.66 0 11.57 4.2 11.57 11.85v16.6h-5.22zM170.29 53.65v-37h5.21v37h-5.21zm16.43 0L175.6 39.3l9.87-13.35h6.16L181.56 39l11.67 14.65h-6.51zM215.43 53.65v-3h-.1c-1.35 2.35-4.51 3.7-8.17 3.7-5.96 0-11.57-3.2-11.57-12.95V25.95h5.21V41c0 5.8 2.15 8.6 6.91 8.6 4.81 0 7.26-3.35 7.26-8.7V25.95h5.21v27.7h-4.75zM263.68 53.65v-15.5c0-5.25-2.2-8.2-6.56-8.2-4.61 0-6.61 2.55-6.61 8.1v15.6h-5.21v-16.1c0-5.45-2.56-7.6-6.31-7.6-4.61 0-6.86 2.7-6.86 8.15v15.55h-5.21v-27.7h4.81v3h.1c2.25-2.65 4.36-3.75 7.97-3.75 3.61 0 7.21 1.75 8.62 4.65 2.01-3.15 4.76-4.65 9.17-4.65 7.21 0 11.32 4.5 11.32 11.65v16.8h-5.23z"
      />
    </svg>
  );
}