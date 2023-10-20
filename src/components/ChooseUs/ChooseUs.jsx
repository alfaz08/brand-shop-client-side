import React from 'react';

const ChooseUs = () => {
  return (
    <div>
      <h2 className="text-center mt-8 font-semibold text-4xl mb-4">Why Choose Us</h2>
      <div className='grid grid-cols-2 md:grid-cols-4'>

      <div className="">
        <img src="https://i.ibb.co/mDg0XzF/choose1.jpg" alt="Shoes" className="w-[200px]  border border-purple-400 h-[200px] md:w-[300px] rounded-lg mx-auto" />
      
        <h2 className="font-bold mt-4 text-center">EXCEPTIONAL CUSTOMER SERVICE</h2>
        </div>

       

        

        <div className="">
        <img src="https://i.ibb.co/0Q1fxQS/choose2.jpg" alt="Shoes" className="w-[200px] h-[200px] border border-purple-400 md:w-[300px] rounded-lg mx-auto" />
       
        <h2 className="font-bold mt-4 text-center">HIGH PERFORMANCE WEB SOLUTIONS</h2>
        </div>

        <div className="">
        <img src="https://i.ibb.co/DDM0CSy/Untitled-design-7.png" alt="Shoes" className="w-[200px] border border-purple-400 h-[200px] md:w-[300px] rounded-lg mx-auto" />

        <h2 className="font-bold mt-4 text-center">COMPETITIVE PRICES</h2>
        </div>

        <div className="">
        <img src="https://i.ibb.co/qp0c5nv/choose3.jpg" alt="Shoes" className="w-[200px] h-[200px] border border-purple-400 md:w-[300px] rounded-lg mx-auto" />
    
        <h2 className="font-bold mt-4 text-center">ECOMMERCE SPECIALISTS</h2>
        </div>

      </div>
    </div>
  );
};

export default ChooseUs;