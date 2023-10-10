import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { Button } from '../Button/Button';
import cls from './IconButton.module.css';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   icon: string;
   isActive?: boolean;
}

export const IconButton = ({ className, icon, isActive, ...otherProps }: IconButtonProps) => {
   return (
      <>
         <Button {...otherProps} className={classNames(className, cls.iconButton, isActive ? cls.active : undefined)} >
            <img src={icon} alt="icon" />
         </Button>
      </>
   );
};