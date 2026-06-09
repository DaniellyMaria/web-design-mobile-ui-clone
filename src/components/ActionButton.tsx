import type { ReactNode } from 'react';

type ActionButtonProps = {
  icon: ReactNode;
  label: string;
  active?: boolean;
};

function ActionButton({ icon, label, active = false }: ActionButtonProps) {
  return (
    <button className={`action-button ${active ? 'active' : ''}`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default ActionButton;