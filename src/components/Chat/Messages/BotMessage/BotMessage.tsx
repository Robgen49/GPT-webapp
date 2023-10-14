import classNames from 'classnames';
import cls from './BotMessage.module.css';

interface BotMessageProps {
   className?: string;
   text: string;
   time: string;
}

export const BotMessage = ({ className, text, time }: BotMessageProps) => {
   return (
      <div className={cls.botMessageWrapper}>
         <div className={classNames(className, cls.botMessage)}>
            <div className={cls.text}>
               {text}
               <div className={cls.date}>{time}</div>
            </div>
         </div>
      </div>
   );
};