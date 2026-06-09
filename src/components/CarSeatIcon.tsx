type CarSeatIconProps = {
  size?: number;
  color?: string;
};

function CarSeatIcon({ size = 21, color = 'currentColor' }: CarSeatIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* apoio de cabeça */}
      <rect
        x="9"
        y="2.5"
        width="6"
        height="4.5"
        rx="1.6"
        stroke={color}
        strokeWidth="1.8"
      />

      {/* encosto */}
      <path
        d="M8.2 8.2C8.2 7.1 9.1 6.2 10.2 6.2H13.8C14.9 6.2 15.8 7.1 15.8 8.2V14.2C15.8 15.3 14.9 16.2 13.8 16.2H10.2C9.1 16.2 8.2 15.3 8.2 14.2V8.2Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* laterais */}
      <path
        d="M6.2 10.5C6.2 9.7 6.8 9.1 7.6 9.1H8.8V16.4H7.4C6.7 16.4 6.2 15.9 6.2 15.2V10.5Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M15.2 9.1H16.4C17.2 9.1 17.8 9.7 17.8 10.5V15.2C17.8 15.9 17.3 16.4 16.6 16.4H15.2V9.1Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* base */}
      <path
        d="M7.4 16.3H16.6C17.4 16.3 18 16.9 18 17.7V18.6C18 19.1 17.6 19.5 17.1 19.5H6.9C6.4 19.5 6 19.1 6 18.6V17.7C6 16.9 6.6 16.3 7.4 16.3Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CarSeatIcon;