import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { Button } from '../Button/Button';
import cls from './IconButton.module.css';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   icon: string;
}

export const IconButton = ({ className, icon, ...otherProps }: IconButtonProps) => {
   return (
      <>
         <Button {...otherProps} className={classNames(className, cls.iconButton)} >
            <img src={icon} alt="icon" />
         </Button>
      </>
   );
};