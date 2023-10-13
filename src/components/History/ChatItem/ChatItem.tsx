import classNames from 'classnames';
import cls from './ChatItem.module.css';

interface ChatItemProps {
   className?: string;
   title: string;
}

export const ChatItem = ({className, title}: ChatItemProps) => {

   return (
      <div className={classNames(className, cls.ChatItem)}>
         {title}
      </div>
   );
};