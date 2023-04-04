import React from 'react';
import { useState } from 'react';
import { messages } from '../../data/data';
import ChatCard from './ChatCard';
import MessageSearch from "./MessageSearch";


function MessageContainer() {
  const [searchInput, setSearchInput] = useState('');
  return (
    <>
      <MessageSearch
        searchInput={searchInput}
        setSearchInput={setSearchInput} />

      {messages.map((msg, index) => (
        <ChatCard index={index} userName={msg.userName} image={msg.image} message={msg.message} />
      ))}
    </>
  )
}

export default MessageContainer