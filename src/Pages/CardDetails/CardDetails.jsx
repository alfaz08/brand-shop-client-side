import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";

import Slider from "../../components/Slider/Slider";

const CardDetails = () => {

  const allData= useLoaderData();

 const {id} =useParams()
 
   


  const filterData1 = allData.filter(item=>item.brand==='addidas')
  const filterData2 = allData.filter(item=>item.brand==='nike')
  const filterData3 = allData.filter(item=>item.brand==='puma')
  const filterData4 = allData.filter(item=>item.brand==='zara')
  const filterData5 = allData.filter(item=>item.brand==='calvin klein')
  const filterData6 = allData.filter(item=>item.brand==='louis vuitton')



  return (
    <div>
   

  <Slider></Slider>




      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    
    {
      id=== '1'? 
      (
        
        filterData1.length>0 ?
         filterData1.map(item=> <Details key={item._id} item={item}></Details> ) 
         :
        <div>
        <h2 className="mt-4 text-2xl font-bold  ml-10">
          Opps Sorry!!! All Products has been sold out.
        </h2>
        </div>
         ):
      id==='2'? 
      (
        
        filterData2.length>0 ?
         filterData2.map(item=> <Details key={item._id} item={item}></Details> ) 
         :
        <div>
        <h2 className="mt-4 text-2xl font-bold  ml-10">
          Opps Sorry!!! All Products has been sold out.
        </h2>
        </div>
         ):
      id==='3'? 
      (
        
        filterData3.length>0 ?
         filterData3.map(item=> <Details key={item._id} item={item}></Details> ) 
         :
        <div>
        <h2 className="mt-4 text-2xl font-bold  ml-10">
          Opps Sorry!!! All Products has been sold out.
        </h2>
        </div>
         ):
      id==='4'? 
      (
        
        filterData4.length>0 ?
         filterData4.map(item=> <Details key={item._id} item={item}></Details> ) 
         :
        <div>
        <h2 className="mt-4 text-2xl font-bold  ml-10">
          Opps Sorry!!! All Products has been sold out.
        </h2>
        </div>
         ):
      id==='5'? 
      (
        
        filterData5.length>0 ?
         filterData5.map(item=> <Details key={item._id} item={item}></Details> ) 
         :
        <div>
        <h2 className="mt-4 text-2xl font-bold  ml-10">
          Opps Sorry!!! All Products has been sold out.
        </h2>
        </div>
         ):
      id==='6'? 
      (
        
        filterData6.length>0 ?
         filterData6.map(item=> <Details key={item._id} item={item}></Details> ) 
         :
        <div>
        <h2 className="mt-4 text-2xl font-bold  ml-10">
          Opps Sorry!!! All Products has been sold out.
        </h2>
        </div>
         ):
      null
    }
  </div>
    </div>
  );
};

export default CardDetails;