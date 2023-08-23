'use client';
import classNames from 'classnames';
import { ButtonHTMLAttributes, MouseEvent } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = ({
  onClick,
  type = 'button',
  className,
  ...props
}: ButtonProps) => {
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
  };
  return (
    <button
      className={classNames('ripple', className)}
      onClick={handleOnClick}
      type={type}
      {...props}
    >
      asd
    </button>
  );
};

export default Button;
