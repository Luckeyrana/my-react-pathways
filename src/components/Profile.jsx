import React from "react";
import { MyButton } from './Button'
import '../App.css'

const user = [
    {
  name: "Hedy L",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
  sex: "female",
  id: 1,
}, 
{
    name: "Lexy R",
    imageUrl: "https://placehold.co/600x400.png",
    imageSize: 90,
    sex: "male",
    id: 2,
  },
  {
    name: "Shreya",
    imageUrl: "https://www.diagnosisdiet.com/assets/images/7/Georgia-Ede-at-Breckenridge-2018-Global-Mental-Health-Crisis-TN-c6dcf248.jpg",
    imageSize: 90,
    sex: "female",
    id: 3,
  }
];

export function Profile() {
  return (
    <>
     {user.map(user => (
        <div className="card-inner" key={user.id}>
        <h1>{user.name}</h1>
        <img
        className={`avatar mb1 ${user.sex === 'female' ? 'female-identified' : 'male-identified'}`}
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        width={user.imageSize}
        height={user.imageSize}
        />
        
          <MyButton name={`Know more about ${user.name}`} />
     </div>
     ))}
    </>
  )
}


