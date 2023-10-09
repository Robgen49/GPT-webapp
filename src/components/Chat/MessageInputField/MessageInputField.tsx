import React from 'react';
import classNames from 'classnames';
import { useRef } from 'react'
import { Input } from '../Input/Input';
import { IconButton } from '../../IconButton/IconButton';
import sendIcon from '../../../assets/icons/send.svg'
import cls from './MessageInputField.module.css';

interface MessageInputFieldProps {
   className?: string;
   submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
   onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
   value: string;
}

export const MessageInputField = ({ className, value, submitHandler, onChange }: MessageInputFieldProps) => {
   const messageInputRef = useRef<HTMLFormElement>(null);
   messageInputRef.current?.scrollIntoView(false);

   return (
      <form ref={messageInputRef} onSubmit={submitHandler} className={classNames(className, cls.MessageInputField)}>
         <Input value={value} autoFocus onChange={onChange} />
         <IconButton type='submit' icon={sendIcon} />
      </form>
   );
};