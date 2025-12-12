/*
PHASE 1
State management is demonstrated by using “GameCards” as components, and using hooks such as useState primarily to manage their function

PHASE 2
Changing GameCard into compound component
make GameCard into a wrapper with sub components image, info, playedbutton 
*/
import {ReactNode, useState} from "react";

//wrapper
interface GameCardProps {
  children: ReactNode;
}
// Image subcomponent
interface GameCardImageProps {
  image: string;
  name: string;
}
// Info subcomponent
interface GameCardInfoProps {
  name: string;
  rating: number;
}
// Played Button subcomponent
interface GameCardPlayedButtonProps {
  id: number;
  playedGames: number[];
  togglePlayed: (id: number) => void;
}

export default function GameCard({ children }: GameCardProps) {
  return (
    <div
      style={{
        background: "black",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center",
        color: "white",
      }}
    >
      {children}
      </div>
  );
}

  //new export functions for sub components
  export function GameCardImage({ image, name}: GameCardImageProps){
    return (
<img
        src={image}
        alt={name}
        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
      />
      
    )
  }
  
  export function GameCardInfo({ name, rating}: GameCardInfoProps) {
        return (
          <div>
            <h3>{name}</h3>
      <p>Rating: {rating}</p>
          </div>
        )
      }

  export function GameCardPlayedButton({ id, playedGames, togglePlayed}: GameCardPlayedButtonProps) {

      return (
        <button
            onClick={() => togglePlayed(id)}
            style={{
              marginTop: "5px",
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              background: playedGames.includes(id) ? "red" : "grey",
              color: playedGames.includes(id) ? "white" : "black",
            }}
          >

            {playedGames.includes(id) ? "Played!" : "Played?"}
          </button>
      )
    }
