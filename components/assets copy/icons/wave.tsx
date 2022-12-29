const Wave = ({
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
    viewBox="0 0 664 719"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M428.848 -149.169C435.393 -61.6836 382.73 111.3 119.724 103.353C-143.283 95.406 -210.719 280.459 -211.562 373.978"
      stroke="#186E7A"
      strokeWidth="27"
    />
    <path
      d="M429.212 -148.725C435.756 -61.2395 383.094 111.744 120.087 103.797C-142.919 95.8501 -210.356 280.903 -211.198 374.422"
      stroke="#186E7A"
      strokeWidth="27"
    />
    <path
      d="M463.236 -83.8509C469.781 3.63444 417.118 176.618 154.112 168.671C-108.895 160.724 -176.331 345.777 -177.174 439.296"
      stroke="#186E7A"
      strokeWidth="27"
    />
    <path
      d="M463.6 -83.4068C470.144 4.07853 417.482 177.062 154.475 169.115C-108.531 161.168 -175.967 346.221 -176.81 439.74"
      stroke="#186E7A"
      strokeWidth="27"
    />
    <path
      d="M488.683 -23.0114C495.227 64.4739 442.565 237.458 179.558 229.511C-83.4478 221.563 -150.884 406.616 -151.727 500.136"
      stroke="#186E7A"
      strokeWidth="27"
    />
    <path
      d="M489.047 -22.5673C495.591 64.918 442.929 237.902 179.922 229.955C-83.084 222.008 -150.521 407.06 -151.363 500.58"
      stroke="#186E7A"
      strokeWidth="27"
    />
    <path
      d="M463.198 -219.201C468.782 -130.931 413.248 44.3984 146.445 39.5528C-120.358 34.7071 -191.03 222.403 -193.016 316.856"
      stroke="#186E7A"
      strokeWidth="27"
    />
    <path
      d="M470.848 -283.594C476.431 -195.324 420.898 -19.9946 154.095 -24.8403C-112.708 -29.686 -183.38 158.01 -185.366 252.463"
      stroke="#186E7A"
      strokeWidth="27"
    />
  </svg>
);

export default Wave;