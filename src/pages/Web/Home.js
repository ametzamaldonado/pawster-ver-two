import React from 'react'
import { TinderContainer, TabsContainer, NavBarContainer } from "../../components/index"

function Home() {
    return (
        <>
            <div className="left-container">
                <NavBarContainer />
                <TabsContainer />
            </div>
            <div className="right-container">
                <TinderContainer />
            </div>
        </>
    )
}

export default Home