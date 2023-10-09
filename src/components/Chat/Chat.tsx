import React from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import { Header } from './Header/Header';
import { Messages } from './Messages/Messages';
import { MessageInputField } from './MessageInputField/MessageInputField';
import cls from './Chat.module.css';

interface ChatProps {
   className?: string;
}

export const Chat = ({ className }: ChatProps) => {

   const [req, setReq] = useState("");
   const [res, setRes] = useState("Response must be there");
   const [userMessages, setUserMessages] = useState<string[]>([]);
   const [allMessages, setAllMessages] = useState<string[]>([]);


   const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setUserMessages(prevState => [...prevState, req])
      setAllMessages(prevState => [...prevState, req, res])
      setReq("");
      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
   }
   const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => setReq(event.target.value)

   return (
      <div className={classNames(className, cls.chat)}>
         <Header title="ChatGPT" />
         <Messages userMessages={userMessages} allMessages={allMessages} />
         <MessageInputField value={req} onChange={changeHandler} submitHandler={submitHandler} />
      </div>
   );
};