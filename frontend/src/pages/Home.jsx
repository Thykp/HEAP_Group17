import { useEffect, useState } from 'react'
import Taskbar from '../components/Taskbar.jsx'
import LineGraph from '../components/LineGraph.jsx'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import BattlePass from '../components/battlepass.jsx';


const Home = () => {
  
  const workouts = ['Pushups', 'Squats', 'Planks', 'Jumping Jacks'];
  const data = [20,30,45,50,60,70,95,150,160,165,170,200];

  return (
    <div>
      <Navbar/>
      <Taskbar workouts={workouts} />
      <LineGraph data={data}/>
      <BattlePass/>
    </div>
  )
}

export default Home