
import { useLoaderData } from 'react-router-dom';
import MyCartDetails from './MyCartDetails';

const MyCart = () => {
  const allCart=useLoaderData()
  console.log(allCart);
  return (
    <div className='bg-purple-100'>
     <h2 className='font-fold text-4xl ml-4'>Shoping Cart</h2>
     <div className="border-t border-gray-400 m-4"></div>

      <div>
      {
        allCart.map(item=>
          <MyCartDetails key={item._id} item={item}></MyCartDetails>
          )
      }
      </div>
      {/* <div className='grid justify-end'>
        <h2 className='font-bold text-2xl mb-4'>Total Item: 5</h2>
        <h2 className='font-bold text-2xl mb-4'>Total Price: 10000 $</h2>
        <button className='btn bg-purple-400'>Proceed to Checkout</button>
      </div> */}
    </div>
  );
};

export default MyCart;