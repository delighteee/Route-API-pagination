import React from "react";
import Card from "./components/Card";
import data from "./components/data";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  
  const cards = data.map((item) => {

    return <Card key={item.id} {...item} />;
  });

  return (
    <div id="home">
      {cards}
      <Outlet />
    </div>
  );
}
