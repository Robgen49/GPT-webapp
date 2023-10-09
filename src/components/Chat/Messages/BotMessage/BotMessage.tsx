import React from 'react';
import classNames from 'classnames';
import cls from './BotMessage.module.css';

interface BotMessageProps {
   className?: string;
   text: string;
}

export const BotMessage = ({ className, text }: BotMessageProps) => {
   return (
      <div className={classNames(className, cls.BotMessage)}>
         {text}
      </div>
   );
};