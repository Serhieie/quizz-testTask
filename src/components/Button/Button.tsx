import clsx from 'clsx';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  type,
  text,
  handleClick,
  children,
  confirm = true,
}) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      className={clsx(
        ' py-3  text-darkGray flex items-center justify-center shadow-lg transition-colors duration-300 ',
        {
          'bg-lightGreen hover:bg-hoverGreen': confirm,
        },
        {
          'bg-violet-200 hover:bg-violet-400': !confirm,
        }
      )}
    >
      <span className="flex items-center gap-1 ">
        {text}
        {''}
        {children}
      </span>
    </button>
  );
};
