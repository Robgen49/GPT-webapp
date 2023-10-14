import classNames from 'classnames';
import cls from './UserMessage.module.css';

interface UserMessageProps {
   className?: string;
   text: string;
}

export const UserMessage = ({ className, text }: UserMessageProps) => {

   return (
      <div className={cls.useMessageWrapper}>
         <div className={classNames(className, cls.userMessage)}>
            <div>{text}</div>
         </div>
      </div>
   );
};