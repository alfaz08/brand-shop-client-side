import Rating from "react-rating";

const Details = ({item}) => {

  const {_id,brand,description,image,name,rating,type,price}=item
 
  console.log(item);
  return (
    <div >
      <h2>
      <div className="card h-96 bg-purple-100 shadow-xl">
  <figure><img className=" h-52 w-full" src={image} alt="Shoes" /></figure>
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
    <h2 className="text-xl font-semibold">Price: {price}$</h2>
    </div>
    <div>
    <Rating
  placeholderRating={3.5}
  emptySymbol={<img src="assets/images/star-grey.png" className="icon" />}
  placeholderSymbol={<img src="assets/images/star-red.png" className="icon" />}
  fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
/>
    </div>
  </div>
</div>
      </h2>
    </div>
  );
};

export default Details;