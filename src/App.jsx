import React from "react";
import Card from "./components/Card";
import Newcard from "./components/Newcard";
import Useestate from "./components/Useestate";
import UsestateAdv from "./components/UsestateAdv";
import Prop from "./components/Prop";

function App() {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
      name: "anurag",
      proffesion: "Devloper",
      friend: false,
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
      name: "Harsh",
      proffesion: "Artist",
      friend: false,
    },
    {
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
      name: "aman",
      proffesion: "SDE",
      friend: false,
    },
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
      name: "Shivam",
      proffesion: "Student",
      friend: false,
    },
  ];
  return (
    <>
      <Card/>
      <Newcard/>
      <Useestate/>
      <UsestateAdv/>
      <div className=" w-screen min-h-screen flex  flex-wrap justify-center items-center gap-10  ">
        {data.map((item, index) => (
          <Prop info={item} />
        ))}
      </div>
    </>
  );
}

export default App;
