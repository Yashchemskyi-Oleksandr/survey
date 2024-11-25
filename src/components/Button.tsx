import clsx from 'clsx';
import { ReactNode } from 'react';

interface IButton {
  children: ReactNode;
  onClick: () => void;
  active?: boolean;
}
const Button = ({
  children, onClick, active,
}: IButton) => (
  <button
    type='button'
    className={clsx('button', { active })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
