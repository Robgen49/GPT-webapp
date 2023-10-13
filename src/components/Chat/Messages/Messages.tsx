import classNames from 'classnames';
import { UserMessage } from './UserMessage/UserMessage';
import { BotMessage } from './BotMessage/BotMessage';
import { Loader } from '../../Loader/Loader';
import cls from './Messages.module.css';

interface MessagesProps {
   className?: string;
   userMessages: string[];
   allMessages: string[];
   isLoading: boolean;
}

export const Messages = ({ userMessages, allMessages, className, isLoading }: MessagesProps) => {
   const userMessagesSet = new Set(userMessages)
   console.log(isLoading)
   return (
      <div className={classNames(className, cls.messages)}>
         
            {/* // allMessages.map(el => (
            //    el.length > 0 ? (userMessagesSet.has(el) ? <UserMessage key={el} text={el} /> : <BotMessage key={el} text={el} />) : <></>
            // )) */}
            <UserMessage  text='Hello'/>
            <BotMessage text="import classNames from 'classnames';
import { UserMessage } from './UserMessage/UserMessage';
import { BotMessage } from './BotMessage/BotMessage';
import { Loader } from '../../Loader/Loader';
import cls from './Messages.module.css';import classNames from 'classnames';
import { UserMessage } from './UserMessage/UserMessage';
import { BotMessage } from './BotMessage/BotMessage';
import { Loader } from '../.../Loader/Loader';
import cls from './Messages.module.css';import classNames from 'classnames';
import { UserMessage } from './UserMessage/UserMessage';
import { BotMessage } from './BotMessage/BotMessage';
import { Loader } from '../../Loader/Loader';
import cls from './Messages.module.css'./Loader/Loader';
import cls from './Messages.module.css';import classNames from 'classnames';
import { UserMessage } from './UserMessage/UserMessage';
import { BotMessage } from './BotMessage/BotMessage';
import { Loader } from '../../Loader/Loader';
import cls from './Messages.module.css'./Loader/Loader';
import cls from './Messages.module.css';import classNames from 'classnames';
import { UserMessage } from './UserMessage/UserMessage';
import { BotMessage } from './BotMessage/BotMessage';
import { Loader } from '../../Loader/Loader';
import cls from './Messages.module.css'./Loader/Loader';
import cls from './Messages.module.css';import classNames from 'classnames';
import { UserMessage } from './UserMessage/UserMessage';
import { BotMessage } from './BotMessage/BotMessage';
import { Loader } from '../../Loader/Loader';
import cls from './Messages.module.css'/Loader/Loader';
import cls from './Messages.module.css';import classNames from 'classnames';
import { UserMessage } from './UserMessage/UserMessage';
import { BotMessage } from './BotMessage/BotMessage';
import { Loader } from '../../Loader/Loader';
import cls from './Messages.module.css';"/>
         
         {
            isLoading ? <Loader /> : <></>
         }
      </div>
   );
};