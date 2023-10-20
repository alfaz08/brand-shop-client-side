import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";

const UpdateProduct = () => {
 
   const loadedProduct =useLoaderData();


  const handleUpdateProduct=(event)=>{
    event.preventDefault();
 
    const form = event.target
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value.toLowerCase();
    const rating = form.rating.value;
    const description = form.des.value;
    const price = form.price.value;
    const type = form.type.value;
    const updatedProduct={image,name,brand,rating,description,type,price};
    console.log(updatedProduct); 
     
    fetch(`http://localhost:5000/products/${loadedProduct._id}`,{
       method:'PUT',
       headers:{
        'content-type':'application/json'
       },
       body:JSON.stringify(updatedProduct)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount>0){
        Swal.fire({
          title: 'Success!',
          text: 'Updated Product successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
        
      }  
    })



  }



  return (
    <div>
      <div className="bg-purple-100 ">
     
     <div className="hero  bg-purple-100 max-w-4xl mx-auto">
 <div className="hero-content flex-col ">
   <div className="text-center bg-white md:w-[700px] ">
    <img className="w-24 h-20 mx-auto" src="https://i.ibb.co/HgXTk5y/Fashion-Style-1-removebg-preview.png" alt="" />
    
   </div>
   <div className="card flex-shrink-0 md:w-full bg-purple-100 border border-black">
     <form onSubmit={handleUpdateProduct} className="card-body">

       <div className="form-control">
         <label className="label">
           <span className="label-text">Image</span>
         </label>
         <input type="text" name="image" defaultValue={loadedProduct?.image} placeholder="Image URL" className="input input-bordered" required />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Name</span>
         </label>
         <input type="text" defaultValue={loadedProduct?.name} placeholder="Name" name="name" className="input input-bordered" required />
        
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Brand Name</span>
         </label>
         <input type="text" defaultValue={loadedProduct?.brand} placeholder="Brand Name" name="brand" className="input input-bordered" required />
        
       </div>
       <div className="flex gap-2">
       <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text">Price</span>
         </label>
         <input type="text" defaultValue={loadedProduct?.price} placeholder="Price" name="price" className="input input-bordered" required />
        
       </div>
       <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text">Rating</span>
         </label>
         <input type="text" defaultValue={loadedProduct?.rating} placeholder="Rating" name="rating" className="input input-bordered" required />
        
       </div>
       </div>

       <div className="form-control">
               <label className="label">
                 <span className="label-text">Type</span>
               </label>
               <select name="type" className="input input-bordered" required>
               <option value="" disabled>
                   -- Select Type --
                 </option>
                 <option defaultValue={loadedProduct?.apparel} value="apparel">Apparel</option>
                 <option defaultValue={loadedProduct?.footwear} value="footwear">Footwear</option>
                 <option defaultValue={loadedProduct?.accessories} value="accessories">Accessories</option>
                 <option defaultValue={loadedProduct?.sportswear} value="sportswear">Sportswear</option>
                 <option defaultValue={loadedProduct?.Outwear} value="Outwear">Outwear</option>
               </select>
             </div>

       <div className="form-control">
         <label className="label">
           <span className="label-text">Short Description</span>
         </label>
         <input type="text" defaultValue={loadedProduct?.description} name="des" placeholder="Short Description" className=" h-24 input input-bordered" required />
        
       </div>
     



       <div className="form-control mt-6">
         <button className="btn bg-purple-400 text-white hover:bg-[#ecb3ff] hover:text-black">Update Product</button>
       </div>
     </form>
   </div>
 </div>
</div>
   </div>
    </div>
  );
};

export default UpdateProduct;