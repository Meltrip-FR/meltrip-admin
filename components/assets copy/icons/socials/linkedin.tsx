const Linkedin = ({
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
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="46" height="46" rx="23" fill="white" />
    <path
      d="M32.2 23.8561V30.1992H28.4869V24.2429C28.4869 22.7731 27.9455 21.7675 26.6304 21.7675C25.6248 21.7675 25.006 22.4637 24.7739 23.0826C24.6966 23.3146 24.6192 23.624 24.6192 24.0108V30.1992H20.9062C20.9062 30.1992 20.9836 20.1431 20.9062 19.1375H24.6192V20.6846C25.0834 19.911 26.0116 18.8281 27.9455 18.8281C30.3434 18.8281 32.2 20.4525 32.2 23.8561ZM17.0385 13.8C15.8008 13.8 14.95 14.6509 14.95 15.7339C14.95 16.8169 15.7235 17.6678 16.9612 17.6678C18.2762 17.6678 19.0497 16.8169 19.0497 15.7339C19.1271 14.5736 18.3535 13.8 17.0385 13.8ZM15.182 30.1992H18.895V19.1375H15.182V30.1992Z"
      fill="#CE5729"
    />
  </svg>
);

export default Linkedin;
