// import { useEffect, useState } from "react";

// const Clock = () => {
//   const [timer, setTimer] = useState("");

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       const dateTime = new Date().toLocaleTimeString();
//       setTimer(dateTime);
//     }, 1000);

//     return () => clearInterval(timerId);
//   }, []);
//   return (
//     <>
//       <h1>Timer</h1>
//       <h2>{timer}</h2>
//     </>
//   );
// };
// export default Clock;
