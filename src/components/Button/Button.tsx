import cls from './Button.module.css';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string,
}

export const Button = ({ className, children, ...otherProps }: ButtonProps) => {
   return (
      <button className={classNames(className, cls.btn)} {...otherProps} >{children}</button>
   );
};