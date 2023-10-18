import { useEffect, useState } from "react";
import Card from "./Card";

const Cards= () => {
 
  const [brand,setBrand]=useState([]);

  useEffect(()=>{
    fetch('/data.json')
    .then(res=>res.json())
    .then(data=>setBrand(data))
  },[])
  console.log(brand);
  

  return (
    <div>

    
       <div className="mt-2">
      <h2 className="text-center font-semibold text-5xl mt-4">Our Brand List</h2>
      <div className="grid justify-center mt-2">
      <hr className=" w-80 border-b-8 border-purple-400"/>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 gap-6 mt-6">
        {
          brand.map(card=>
            <Card key={card.id} card={card}></Card>
            )
        }
      </div>
      </div>
     
    </div>
  );
};

export default Cards;