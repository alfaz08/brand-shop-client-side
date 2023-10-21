import React from 'react';

const DeleteCard = () => {
  const handleDelete=(_id)=>{
    console.log(_id);
    fetch(`https://brand-shop-server-ij8udurzt-alfaz-hossains-projects.vercel.app/cart/${_id}`,{
      method: 'DELETE'

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.deletedCount>0){
        alert('deleted successfully')
      }
    })

  }

  return (
    <div>
      <button>sdsd</button>
    </div>
  );
};

export default DeleteCard;