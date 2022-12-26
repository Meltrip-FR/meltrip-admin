const BackgroundNewsletter = ({
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
    viewBox="0 0 1332 357"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M192 165L192 357L100 357C44.7715 357 1.75568e-06 312.228 1.09709e-06 257L0 165L192 165Z"
      fill="#186E7A"
    />
    <rect x="41" width="1291" height="315" rx="75" fill="#CE5729" />
    <path
      d="M799.097 158.186C772.999 80.4362 830.847 0 912.859 0H1257C1298.42 0 1332 33.5786 1332 75V240C1332 281.421 1298.42 315 1257 315H923.651C880.685 315 842.521 287.554 828.849 246.821L799.097 158.186Z"
      fill="#186E7A"
    />
  </svg>
);

export default BackgroundNewsletter;
