const ChevronUp = ({
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
    xmlns="http://www.w3.org/2000/svg"
    height={size ? size : height}
    width={size ? size : width}
    stroke={color ? color : "currentColor"}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

export default ChevronUp;
