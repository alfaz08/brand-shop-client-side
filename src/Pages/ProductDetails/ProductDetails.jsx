import { useLoaderData, useParams } from "react-router-dom";
import SingleProductDetails from "./SingleProductDetails";

const ProductDetails = () => {
  const allData= useLoaderData();
  console.log(allData);
  const {id} =useParams()
  console.log(id);

  const filterData = allData.filter(item=>item._id===id)
  console.log(filterData);
  return (
    <div>
      {
        filterData.map(item=>
          <SingleProductDetails key={item._id} item={item}></SingleProductDetails>
          )
      }
    </div>
  );
};

export default ProductDetails;