interface AceLogoIconProps {
  size?: number;
  style?: React.CSSProperties;
}

export function AceLogoIcon({ size = 25, style }: AceLogoIconProps) {
  return (
    <svg
      style={{ marginLeft: 5, position: "relative", top: 1, ...style }}
      width={size}
      height={size}
      viewBox="0 0 110 110"
      fill="none"
    >
      <circle cx="55" cy="33" r="22" fill="#00A6A6" />
      <circle cx="77" cy="55" r="22" fill="rgba(255,255,255,0.45)" />
      <circle cx="55" cy="77" r="22" fill="#00A6A6" />
      <circle cx="33" cy="55" r="22" fill="rgba(255,255,255,0.45)" />
      <polygon points="55,43 64,55 55,67 46,55" fill="#FFB84D" />
      <polygon points="55,48 60,55 55,62 50,55" fill="white" opacity="0.30" />
      <circle cx="55" cy="55" r="2.8" fill="white" />
    </svg>
  );
}
