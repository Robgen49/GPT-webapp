import classNames from 'classnames';
import cls from './Input.module.css';
import { TextareaHTMLAttributes } from 'react';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
   className?: string;
}

export const Input = ({ className, ...otherProps }: InputProps) => {

   return (
      <div className={classNames(className, cls.inputWrapper)}>
         <textarea {...otherProps} aria-multiline className={cls.input} />
      </div>
   );
};