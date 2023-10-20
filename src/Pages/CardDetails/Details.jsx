import { Link } from "react-router-dom";

const Details = ({item}) => {

  
  const {_id,brand,description,image,name,rating,type,price}=item
 
  console.log(item);
  return (
    <div >
      <h2>
      <div className="card bg-purple-100 shadow-xl">
  <figure><img className="h-80 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-semibold">
      {name}
      <div className="badge bg-purple-400 font-bold ">{type}</div>
    </h2>
    <p>{description}</p>
    <div className=" ">
      <h2 className="text-xl font-semibold">Brand Name: {brand}</h2>
    </div>
    <div>
    <h2 className="text-xl font-semibold">Price: ${price}</h2>
    </div>
    <div>
    <h2>Rating:{rating} star</h2>
    </div>

    <div className="flex justify-around">
   <Link to={`/productdetails/${_id}`}>
   <button className="btn bg-purple-400 font-bold">Product Details</button>

   </Link>
    
    <Link to={`/update/${_id}`}>
    <button className="btn bg-purple-400 font-bold">Product Update</button>
    </Link>
   </div>

  </div>
   
   



</div>
      </h2>
    </div>
  );
};

export default Details;