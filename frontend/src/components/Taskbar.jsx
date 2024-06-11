import React from "react";
import "../css/Taskbar.css"

const Taskbar = ({ workouts }) => {
    return (
        <div className="taskbar">
            <h2>Today's Workouts</h2>
            <ul>
                {workouts.map((workout, index) => (
                    <li key={index}>{workout}</li>
                ))}
            </ul>
        </div>
    );
};

export default Taskbar;