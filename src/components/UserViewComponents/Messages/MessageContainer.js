import React from 'react';
import { useState } from 'react';
// import { messages } from '../../../data/data';
import ChatCard from './ChatCard';
import MessageSearch from "./MessageSearch";
import NoMessages from './NoMessages';


function MessageContainer() {
  const [noMessages, setNoMessages] = useState(true);
  const [messages, setMessages] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  return (
    <>
      <MessageSearch
        searchInput={searchInput}
        setSearchInput={setSearchInput} />
      {noMessages && <NoMessages />}
      {messages?.map((msg, index) => (
        <ChatCard key={index} userName={msg.userName} image={msg.image} message={msg.message} />
      ))}
    </>
  )
}

export default MessageContainer