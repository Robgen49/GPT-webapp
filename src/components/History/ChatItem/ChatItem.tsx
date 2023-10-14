import classNames from 'classnames';
import logoIcon from '../../../assets/icons/logo.svg';
import cls from './ChatItem.module.css';

interface ChatItemProps {
   className?: string;
   title: string;
   lastMessage: string;
}

export const ChatItem = ({ className, title, lastMessage }: ChatItemProps) => {

   return (
      <div className={classNames(className, cls.ChatItem)}>
         <div className={cls.chatIcon}>
            <img src={logoIcon} alt="logo" />
         </div>
         <div className={cls.chatInfo}>
            <div className={cls.title}>
               {title}
            </div>
            <div className={cls.lastMessage}>
               {lastMessage}
            </div>
         </div>
      </div>
   );
};