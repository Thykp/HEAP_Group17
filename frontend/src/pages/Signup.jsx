import { curve, darkdashboard, heroBackground, robot } from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";
import { BackgroundCircles, BottomLine, Gradient } from "../components/design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "../components/Generating";
import Notification from "../components/Notification";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Header from "../components/Header";
import ButtonGradient from "../assets/svg/ButtonGradient";

const Signup = () => {
    return (
        <>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            {/* <Header /> */}
            <Hero />
            <Footer />
        </div>
    
            <ButtonGradient />
        </>
    );
}

export default Signup
