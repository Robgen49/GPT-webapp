import classNames from 'classnames';
import cls from './UserMessage.module.css';

interface UserMessageProps {
   className?: string;
   text: string;
   time: string;
}

export const UserMessage = ({ className, text, time }: UserMessageProps) => {

   return (
      <div className={cls.useMessageWrapper}>
         <div className={classNames(className, cls.userMessage)}>
            <div className={cls.text}>
               {text}
               <div className={cls.date}>{time}</div>
            </div>
         </div>
      </div>
   );
};