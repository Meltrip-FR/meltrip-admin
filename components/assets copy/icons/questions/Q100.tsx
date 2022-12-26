export const Q100 = ({
  color,
  size,
  height,
  width,
}: {
  color?: string;
  size?: number;
  height?: number;
  width?: number;
}) => (
  <svg
    height={size ? size : height}
    width={size ? size : width}
    fill={color ? color : "none"}
    viewBox="0 0 376 376"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="376" height="376" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use transform="scale(0.000925926)" />
      </pattern>
      <image id="image0_50_2111" width="1080" height="1080" />
    </defs>
  </svg>
);
