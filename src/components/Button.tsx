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
  const rippleEffect = (event: MouseEvent<HTMLButtonElement>) => {
    const btn = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
    circle.classList.add('ripple');

    const ripple = btn.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    btn.appendChild(circle);
  };
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    rippleEffect(e);
    if (onClick) onClick(e);
  };
  return (
    <button
      className={classNames(
        'relative overflow-hidden hover:bg-opacity-60',
        className,
      )}
      onClick={handleOnClick}
      type={type}
      {...props}
    >
      asd
    </button>
  );
};

export default Button;
