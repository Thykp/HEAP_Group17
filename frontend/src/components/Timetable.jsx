// import React, { useState } from "react"; //original

// const Timetable = () => {
//   const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//   const [hoveredEvent, setHoveredEvent] = useState(null);

//   const events = {
//     Monday: [
//       { id: 1, time: "9:00 AM - 10:00 AM", title: "Event 1", details: "Details about Event 1" },
//       { id: 2, time: "10:30 AM - 11:30 AM", title: "Event 2", details: "Details about Event 2" },
//     ],
//     Tuesday: [
//       { id: 3, time: "11:00 AM - 12:00 PM", title: "Event 3", details: "Details about Event 3" },
//       { id: 4, time: "1:00 PM - 2:00 PM", title: "Event 4", details: "Details about Event 4" },
//     ],
//     // Add similar entries for other days...
//   };

//   const handleMouseEnter = (event) => {
//     setHoveredEvent(event);
//   };

//   const handleMouseLeave = () => {
//     setHoveredEvent(null);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
//         {days.map((day, index) => (
//           <div
//             key={index}
//             className="border border-n-2 p-4 rounded-lg bg-n-8 text-n-1 relative"
//           >
//             <h2 className="text-center font-bold text-xl mb-2">{day}</h2>
//             <div className="space-y-2">
//               {events[day]?.map((event) => (
//                 <div
//                   key={event.id}
//                   className="bg-n-6 p-2 rounded-md relative"
//                   onMouseEnter={() => handleMouseEnter(event)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   {event.time}: {event.title}
//                   {hoveredEvent && hoveredEvent.id === event.id && (
//                     <div className="absolute top-0 left-0 mt-8 p-2 rounded-md shadow-lg z-10 w-64 bg-n-8 text-n-1 border border-n-2">
//                       <h3 className="font-bold">{hoveredEvent.title}</h3>
//                       <p>{hoveredEvent.details}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timetable;


import React, { useState, useEffect } from "react";
import axios from "axios";

const Timetable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [events, setEvents] = useState({});

  useEffect(() => {
    const fetchWorkoutPlan = async () => {
      try {
        const response = await axios.post('http://localhost:3000/workout', {
          uuid: 2,
          yearsOfExperience: 0,
          interest: 'calisthenics',
          freeDays: 5,
          height: 1.8,
          weight: 70,
          targetWeight: 80
        });
        const data = response.data;
        const transformedEvents = transformData(data.workoutPlan.days);
        setEvents(transformedEvents);
      } catch (error) {
        console.error("Error fetching workout plan:", error);
      }
    };

    fetchWorkoutPlan();
  }, []);

  const transformData = (days) => {
    const transformed = {};
    days.forEach((day) => {
      transformed[day.day_of_week] = day.exercises.map((exercise, index) => ({
        id: index,
        time: `${exercise.set} sets x ${exercise.reps} reps`,
        title: exercise.exercise,
        details: exercise.weight > 0 ? `Weight: ${exercise.weight}kg` : 'Bodyweight Exercise',
      }));
    });
    console.log(transformed);
    return transformed;
  };  
  

  const handleMouseEnter = (event) => {
    setHoveredEvent(event);
  };

  const handleMouseLeave = () => {
    setHoveredEvent(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {days.map((day, index) => (
          <div
            key={index}
            className="border border-n-2 p-4 rounded-lg bg-n-8 text-n-1 relative"
          >
            <h2 className="text-center font-bold text-xl mb-2">{day}</h2>
            <div className="space-y-2">
              {events[day]?.map((event) => (
                <div
                  key={event.id}
                  className="bg-n-6 p-2 rounded-md relative"
                  onMouseEnter={() => handleMouseEnter(event)}
                  onMouseLeave={handleMouseLeave}
                >
                  {event.time}: {event.title}
                  {hoveredEvent && hoveredEvent.id === event.id && (
                    <div className="absolute top-0 left-0 mt-8 p-2 rounded-md shadow-lg z-10 w-64 bg-n-8 text-n-1 border border-n-2">
                      <h3 className="font-bold">{hoveredEvent.title}</h3>
                      <p>{hoveredEvent.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
