import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Taskbar from "./components/Taskbar";
import LineGraph from "./components/LineGraph";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      {/* <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Footer />
      </div>

      <ButtonGradient /> */}

      <Login />
    </>
  );
};

export default App;
