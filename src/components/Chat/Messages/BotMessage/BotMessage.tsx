import classNames from 'classnames';
import cls from './BotMessage.module.css';

interface BotMessageProps {
   className?: string;
   text: string;
}

export const BotMessage = ({ className, text }: BotMessageProps) => {
   return (
      <div className={cls.botMessageWrapper}>
         <div className={cls.title}>Bot</div>
         <div className={classNames(className, cls.botMessage)}>
            <div>{text}</div>
         </div>
      </div>
   );
};