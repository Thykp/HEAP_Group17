import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Taskbar from '../components/Taskbar.jsx'
import LineGraph from '../components/LineGraph.jsx'

const Home = () => {
  
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme? current_theme : 'light');
  const workouts = ['Pushups', 'Squats', 'Planks', 'Jumping Jacks'];
  const data = [20,30,45,50,60,70,95,150,160,165,170,200];

  useEffect(() => {
      localStorage.setItem('current_theme', theme)
    },[theme]
  )

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Taskbar workouts={workouts} />
      <LineGraph data={data}/>
    </div>
  )
}

export default Home