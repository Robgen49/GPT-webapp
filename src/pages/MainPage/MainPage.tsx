import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { History } from '../../components/History/History';
import { Chat } from '../../components/Chat/Chat';
import cls from './MainPage.module.css';

interface MainPageProps {
   className?: string;
}

interface Chats {
   id: number,
   name: string;
   text: string;
   date: string;
}

export const MainPage = ({ className }: MainPageProps) => {

   // const [chats, setChats] = useState<Chats[]>([]);

   // useEffect(() => {
   //    const chats = localStorage.getItem('chats');
   //    if (chats !== null) {
   //       setChats(JSON.parse(chats));
   //    }
   // }, [])

   const chatList = ['botOne', 'botTwo', 'botThree', 'botOne', 'botTwo', 'botThree', 'botOne', 'botTwo', 'botThree', 'botOne', 'botTwo', 'botThree', 'botOne', 'botTwo', 'botThree', 'botOne', 'botTwo', 'botThree', 'botOne', 'botTwo', 'botThree', 'botOne', 'botTwo', 'botThree', 'botOne', 'botTwo', 'botThree',]
   return (
      <div className={cls.container}>
         <div className={classNames(className, cls.mainPage)}>
            <History chatList={chatList} />
            <Chat chatName="ChatGPT" />
         </div>
      </div>
   );
};