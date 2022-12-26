const Facebook = ({
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
    stroke={color ? color : "currentColor"}
    viewBox="0 0 46 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="46" height="45" rx="22.5" fill="white" />
    <path
      d="M24.9057 22.9104H29.1862L29.8583 18.6306H24.9049V16.2915C24.9049 14.5136 25.4951 12.9371 27.1848 12.9371H29.9001V9.20221C29.423 9.1388 28.4141 9 26.5076 9C22.5265 9 20.1926 11.0692 20.1926 15.7834V18.6306H16.1001V22.9104H20.1926V34.6736C21.0031 34.7936 21.824 34.875 22.6667 34.875C23.4284 34.875 24.1719 34.8065 24.9057 34.7088V22.9104Z"
      fill="#CE5729"
    />
  </svg>
);

export default Facebook;
