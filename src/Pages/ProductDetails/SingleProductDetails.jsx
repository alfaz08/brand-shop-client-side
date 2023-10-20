import Swal from "sweetalert2";



const SingleProductDetails = ({item}) => {
  const {_id,brand,description,image,name,rating,type,price}=item
  
   const handleCart=()=>{
      const newCart={_id,brand,description,image,name,rating,type,price}
     console.log(newCart);
     fetch('http://localhost:5000/cart',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newCart)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data);
      if(data.insertedId){
        Swal.fire(
          {
            title: 'Success!',
        text: 'User added successfully',
        icon: 'success',
        confirmButtonText: 'Cool'

          }
        )
      }
     })
    }




  return (
    // <div className="md:flex">
    //   <div className="">
    //      <img className="border border-purple-400" src={image} alt="" />
    //   </div>

    //   <div className="">
    //     ghhjh
    //   </div>
    // </div>

    <div className="grid grid-cols-2 mt-4 gap-6">

    <div className="md:border md:border-purple-400">
      <img className="h-[250px] md:h-[500px] w-full" src={image} alt="" />
    </div>

    <div>
      <h1 className="font-bold text-xl">Product Name: {name}</h1>
      <h1 className="font-bold text-xl mt-4">Brand Name: {brand}</h1>
     
       <h2 className="font-bold text-xl mt-4 ">Product Type: {type}</h2>

       <h2 className="font-bold text-xl mt-4">Price: ${price}</h2>
       <h2 className="  mt-4">About Product: {description}</h2>
       
       <select name="type" className="input input-bordered mt-4 border-purple-400" required>
                <option value="select type" >
                    -- Select Size --
                  </option>
                  <option value="apparel">M</option>
                  <option value="footwear">L</option>
                  <option value="accessories">Xl</option>
                  <option value="sportswear">XXL</option>
               
                </select>

       <div className="bg-purple-400 flex justify-between items-center sm:w-[200px] md:w-[400px] h-[100px] rounded-lg mt-4">
        <div>
          <h2 className="ml-2 font-bold">ENJOY EXCLUSIVE <br />OFFERS & DISCOUNT</h2>
        </div>
        <div>
          <h2 className="mr-2 font-bold">Book Now</h2>
        </div>
       </div>
       <div>
        
       </div>
       
       

       <div>
        <div>

        </div>
        
        {/* <h2>Add Promo code or voucher</h2>
        <input type="text" placeholder="Type here" className="input input-bordered border-amber-400 input-accent w-full max-w-xs" /> */}
      <div className="md:flex items-center mt-4 sm: w-[50px] md:w-[400px]">
<input
  type="text"
  className=" px-4 py-2 border border-purple-400 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
  placeholder="Enter Your Coupon Code"
/>
<button 
  className="px-4 py-2 bg-purple-400 font-bold rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
>
  Apply
</button>
</div>
 
<div>
      
       <button onClick={handleCart} className="btn bg-purple-400 mt-4"> Add to Cart</button>
      
       </div>
       </div>
       
       
       
      
    </div>

  </div>
  );
};

export default SingleProductDetails;