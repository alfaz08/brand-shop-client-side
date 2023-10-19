import { Link } from "react-router-dom";

const Card = ({card}) => {
  const {id,brand,image} =card

  return (
    <div>
    <Link  to={`/carddetails/${id}`} >
    
    <div className="card bg-purple-300 md:h-[450px] shadow-xl image-full hover:bg-purple-400 hover:text-black">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body text-center justify-center ">
   <h2 className="text-4xl rounded-lg bg-purple-400 hover:bg-purple-900 text-black hover:text-white">Brand Name:{brand}</h2>
    </div>
  </div>
    </Link>
</div>
   
  );
};

export default Card;