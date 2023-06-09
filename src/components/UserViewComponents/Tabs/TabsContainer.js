import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Badge } from 'react-bootstrap';
import { useAuth } from '../../../context/AuthContext';
import { collection, onSnapshot } from "@firebase/firestore";
import { db } from "../../../firebase/config";
import MatchesContainer from '../Matches/MatchesContainer';
import MessageContainer from '../Messages/MessageContainer';
import './TabsContainer.css'

function TabsContainer() {
  const { currentUser } = useAuth();
  // Below variable meant to implement a way to sort through messages!
  // const [searchInput, setSearchInput] = useState('');
  const [userPetMatches, setUserPetMatches] = useState([]);


  useEffect(() => {
    const matchesRef = collection(db, `users/${currentUser.uid}/matches`);
    const matchesListener = onSnapshot(matchesRef, (querySnapshot) => {
      const userMatches = querySnapshot.docs.map((el) => el.data());
      if (userMatches.length) {
        setUserPetMatches(userMatches);
      }
    });
    
    return () => {
      matchesListener();
    };
  }, [setUserPetMatches, currentUser]);


  return (
    <div className="tabs-container">
      <div className='tabs-navigation profile-hiddenOptions'>
        <Tabs
          defaultActiveKey="matches"
          justify
        >
          <Tab eventKey="matches" title="Matches">
            <MatchesContainer userPetMatches={userPetMatches} />
          </Tab>
          <Tab
            eventKey="messages"
             title={<span>Messages <Badge bg="secondary">{}</Badge></span>}>
            <MessageContainer />
          </Tab>
        </Tabs>
      </div>
    </div>



  )
}

export default TabsContainer