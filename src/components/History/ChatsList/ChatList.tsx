import classNames from 'classnames';
import cls from './ChatList.module.css';
import { ChatItem } from '../ChatItem/ChatItem';

interface ChatListProps {
   className?: string;
   chatList: string[];
}

export const ChatList = ({ className, chatList }: ChatListProps) => {

   return (
      <div className={classNames(className, cls.chatList)}>
         {chatList.map(el => <ChatItem title={el} />)}
      </div>
   );
};