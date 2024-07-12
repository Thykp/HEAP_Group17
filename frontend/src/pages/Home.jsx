import { useEffect, useState } from 'react'
import Taskbar from '../components/Taskbar.jsx'
import LineGraph from '../components/LineGraph.jsx'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import Dashboard from '../components/Dashboard.jsx'
import Battlepass from '../components/Battlepasshome.jsx'
import Timetable from '../components/Timetable.jsx'

const Home = () => {
  
  return (
    <div>
      <Navbar/>
      <Taskbar workouts={workouts} />
      <LineGraph data={data}/>
      <Battlepass/>
      <Timetable/>
    </div>
  )
}

export default Home