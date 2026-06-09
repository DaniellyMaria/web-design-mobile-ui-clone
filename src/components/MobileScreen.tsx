import type { ReactNode } from 'react';

type MobileScreenProps = {
  children: ReactNode;
  variant?: 'light' | 'blue';
};

function MobileScreen({ children, variant = 'light' }: MobileScreenProps) {
  return (
    <div className={`mobile-screen mobile-screen--${variant}`}>
      {children}
    </div>
  );
}

export default MobileScreen;