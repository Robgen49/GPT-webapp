import classNames from 'classnames';
import { ChatList } from './ChatsList/ChatList';
import cls from './History.module.css';

interface HistoryProps {
   className?: string;
   chatList: string[];
}

export const History = ({ className, chatList }: HistoryProps) => {

   return (
      <div className={classNames(className, cls.history)}>
         <ChatList chatList={chatList} />
      </div>
   );
};