import "./style.css";
import { Joke } from "../../components/Joke";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [jokesData, setJokesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/Czechitas-podklady-WEB/daweb-test/deploy/jokes.json"
      );
      const data = await response.json();
      setJokesData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {jokesData.map((item) => (
        <Joke
          key={item.id}
          userAvatar={item.avatar}
          userName={item.name}
          text={item.text}
          likes={item.likes}
          dislikes={item.dislikes}
        />
      ))}
    </div>
  );
};
