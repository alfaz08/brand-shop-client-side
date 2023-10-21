
import { useLoaderData } from 'react-router-dom';
import MyCartDetails from './MyCartDetails';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const MyCart = () => {


  const loadedCart =useLoaderData()
  const [carts,setCarts] =useState(loadedCart)

  const {user}=useContext(AuthContext)
  

  const filterCards=carts.filter(item=>item.email===user.email)
  console.log(filterCards);

  return (
    <div className='bg-purple-100'>
     <h2 className='font-fold text-4xl ml-4'>Shoping Cart</h2>
     <div className="border-t border-gray-400 m-4"></div>

 
     

      <div>
      {
        filterCards.map(item=>
          <MyCartDetails key={item._id} item={item} carts={carts} setCarts={setCarts}></MyCartDetails>
          )
      }
      </div>
      
    </div>
  );
};

export default MyCart;