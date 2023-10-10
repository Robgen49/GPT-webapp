import classNames from 'classnames';
import { OpenAI } from './../../services/OpenAI'
import { useEffect, useState } from 'react';
import { Header } from './Header/Header';
import { Messages } from './Messages/Messages';
import { MessageInputField } from './MessageInputField/MessageInputField';
import cls from './Chat.module.css';

interface ChatProps {
   className?: string;
}

export const Chat = ({ className }: ChatProps) => {

   const [req, setReq] = useState("");
   const [res, setRes] = useState("");
   const [isSendButtonActive, setIsSendButtonActive] = useState(false);
   const [userMessages, setUserMessages] = useState<string[]>([]);
   const [allMessages, setAllMessages] = useState<string[]>([]);

   useEffect(() => {
      if (req.length > 0) {
         setIsSendButtonActive(true);
      }
      else setIsSendButtonActive(false);
   }, [req])

   useEffect(() => {
      if (res.length > 0) {
         setAllMessages(prevState => [...prevState, "", res])
         setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
      }
   }, [res])

   const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (req.length > 0) {
         setUserMessages(prevState => [...prevState, req])
         setAllMessages(prevState => [...prevState, req, ""])
         const request = req;
         setReq("")
         console.log(request)
         const response = await OpenAI(request);
         console.log(response)
         setRes(prevState => response.content ? response.content : "Произошла ошибка по неизвестным причинам")
      }
   }
   const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => setReq(event.target.value)

   return (
      <div className={classNames(className, cls.chat)}>
         <Header title="ChatGPT" />
         <Messages userMessages={userMessages} allMessages={allMessages} />
         <MessageInputField isSendButtonActive={isSendButtonActive} value={req} onChange={changeHandler} submitHandler={submitHandler} />
      </div>
   );
};