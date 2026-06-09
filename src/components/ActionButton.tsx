import type { ReactNode } from 'react';

type ActionButtonProps = {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

function ActionButton({
  icon,
  label,
  active = false,
  onClick,
}: ActionButtonProps) {
  return (
    <button
      type="button"
      className={`action-button ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default ActionButton;