
import React from 'react'

import Profiles from './components/Profiles'
 import Courtney from '../public/Courtney-Henry.jpg'
 import Dries from "../public/Dries-Vincent.jpg"
import Leslie from "../public/Leslie-Alexander.jpg"
import Lindsay from "../public/Lindsay-Walton.jpg"
 import Michael from "../public/Michael-Foster.jpg"
import tom from "../public/tom-cook.jpg"


function App() { 
  return(
    <>

        <Profiles image={Courtney} name="Courtney Henry" email="@leonardkrasn" title="Co-Founder/CEO" lastSeen =" lastseen 3:00"/>
        <Profiles image={Dries} name="Kali Careena" email="@kalicareena" title="Co-Founder/CTO" lastSeen="LastSeen 3 hrs ago"/>
        <Profiles image={Leslie} name="Leslie Alexander" email="@emilyselman" title="Business Relations" lastSeen="Online"/>
        <Profiles image={Lindsay} name="Lindsay Walton" email="@emilyselman" title="FrontEnd developer" lastSeen="lastseen 3hrs ago"/>
        <Profiles image={Michael} name="Michael Foster" email="@emilyselman" title="Designer" lastSeen="last seen 3hrs ago"/>
        <Profiles image={tom} name="tom cook" email="@emilyselman" title="Director of Product" lastSeen="lastseen online"/>

    </>
  );
}
export default App
  
  
