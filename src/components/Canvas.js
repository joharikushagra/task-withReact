import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../css/Card.css";

function Canvas() {
  

  const [data, setData] = useState([]);
  const fetchData = async () => {
    //using json placeholder for dynamic data
    const req = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await req.json();
    setData(data.slice(0, 4));
  };

  useEffect(() => {
    //   fetch data
    fetchData();
  }, []);

  return (
    <>
      <div className="main">
        <h3>
          Suggested topics
          <button style={{ float: "right" }}>More</button>
        </h3>
        <div className="content">
          {data.map((d) => (
            <Card
              key={d.id}
              id={d.id}
              title={d.title}
              url={d.url}
              options={true}
            />
          ))}
        </div>
      </div>
      <div className="main">
        <h3>
          Modules
          <button style={{ float: "right" }}>More</button>
        </h3>
        <div className="content">
          {data.map((d) => (
            <Card key={d.id} title={d.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Canvas;
