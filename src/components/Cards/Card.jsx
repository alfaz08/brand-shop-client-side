

const Card = ({card}) => {
  const {id,brand,image} =card

  return (
    <div>
     <div className="card bg-purple-300 h-[450px] shadow-xl image-full">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
   {brand}
    </div>
  </div>
</div>
   
  );
};

export default Card;