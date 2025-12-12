/*
State management is demonstrated by using “GameCards” as components, and using hooks such as useState primarily to manage their function 
*/
interface GameCardProps {
  name: string;
  image: string;
  rating: number;
}

export default function GameCard({ name, image, rating }: GameCardProps) {
  return (
    <div
      style={{
        background: "#1e1e1e",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center",
        color: "white",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
      />
      <h3>{name}</h3>
      <p>Rating: {rating}</p>
    </div>
  );

}
