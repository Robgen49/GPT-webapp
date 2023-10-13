import classNames from 'classnames';
import { UserMessage } from './UserMessage/UserMessage';
import { BotMessage } from './BotMessage/BotMessage';
import cls from './Messages.module.css';

interface MessagesProps {
   className?: string;
   userMessages: string[];
   allMessages: string[];
}

export const Messages = ({ userMessages, allMessages, className }: MessagesProps) => {
   const userMessagesSet = new Set(userMessages)
   return (
      <div className={classNames(className, cls.messages)}>
         {
            allMessages.map(el => (
               el.length > 0 ? (userMessagesSet.has(el) ? <UserMessage key={el} text={el} /> : <BotMessage key={el} text={el} />) : <></>
            ))
         }
      </div>
   );
};