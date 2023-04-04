import React from 'react';
import { Tabs, Tab, Badge } from 'react-bootstrap';
import { useState } from 'react';
import { messages } from '../../data/data';
import './TabsContainer.css'
import MatchesContainer from '../Matches/MatchesContainer';
import MessageContainer from '../Messages/MessageContainer';


function TabsContainer() {
  const [searchInput, setSearchInput] = useState('');
  return (
    <div className="message-container">
      <div className='message-navigation profile-hiddenOptions'>
        <Tabs
          defaultActiveKey="matches"
          justify
        >
          <Tab eventKey="matches" title="Matches">
            <MatchesContainer />
          </Tab>
          <Tab
            eventKey="messages"
            title={<span>Messages <Badge bg="secondary">{messages.length}</Badge></span>}>
            <MessageContainer />
          </Tab>
        </Tabs>
      </div>
    </div>



  )
}

export default TabsContainer