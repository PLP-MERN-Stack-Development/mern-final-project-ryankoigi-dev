import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/items", {
        headers: { Authorization: "Bearer testtoken" }
      })
      .then((res) => setItems(res.data));
  }, []);

  return (
    <div>
      <h1 className="title">MERN Capstone Dashboard</h1>
      {items.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))}
    </div>
  );
}
