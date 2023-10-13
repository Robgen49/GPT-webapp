import classNames from 'classnames';
import { History } from '../../components/History/History';
import { Chat } from '../../components/Chat/Chat';
import cls from './MainPage.module.css';

interface MainPageProps {
   className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
   const chatList = ['botOne', 'botTwo', 'botThree']
   return (
      <div className={cls.container}>
         <div className={classNames(className, cls.mainPage)}>
            <History chatList={chatList} />
            <Chat />
         </div>
      </div>
   );
};