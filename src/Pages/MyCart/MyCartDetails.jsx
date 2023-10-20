import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const MyCartDetails = ({item}) => {
  const {_id,brand,description,image,name,rating,type,price}=item

  

  const handleDelete=_id=>{
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result)=>{
    if(result.isConfirmed){
     fetch(`http://localhost:5000/cart/${_id}`,{
      method:'DELETE'
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data);
        Swal.fire(
          'Deleted!',
          'Your product has been deleted',
          'success'
        )
      
     })
    }
  })




  }









  return (
    <div>
      
     <div className="flex gap-10">

<div className="">
  <img className=" h-64 w-80 border border-purple-400" src={image} alt="" />
</div>

<div>
  <h1 className="font-bold text-xl">Product Name: {name}</h1>
  <h1 className="font-bold text-xl mt-4">Brand Name: {brand}</h1>
 
   <h2 className="font-bold text-xl mt-4 ">Product Type: {type}</h2>

   <h2 className="font-bold text-xl mt-4">Price: ${price}</h2>
   <h2 className="  mt-4">About Product: {description}</h2>
   
   <button onClick={()=>handleDelete(_id)}  className="mt-4 btn bg-purple-400 font-bold">Delete</button>

   
   <div>
    
   </div>
   
   

   <div>
    <div>

    </div>
   
  


   </div>
   
   
   
  
</div>

</div>

<div className="border-t border-gray-400 m-4"></div>

    </div>

    
  );
};

export default MyCartDetails;