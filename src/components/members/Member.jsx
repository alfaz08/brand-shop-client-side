const Member = () => {
  return (
    <div className=" ">
       <h2  className="text-center mt-8 font-semibold text-4xl mb-4">Meet Our Team Members</h2>
     
     <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center">
      <div className=" col-span-1 flex">
 <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      
 <img src="https://i.ibb.co/Fby7Jx3/istockphoto-1413766112-612x612.jpg" alt="Shoes" className="w-[200px] h-[200px] ml-8 rounded-full " />
  <h2 className="font-bold text-2xl ml-20 mt-4">Arthur</h2>
  <h2 className="font-bold mt-2 text-2xl">Chief Excutive Officer <br /> Stylish Fashion Hub</h2>
 </div>
  <div className="hidden md:grid justify-center  mt-2">
      <hr className=" w-1 h-72 ml-8 border-8 border-purple-400"/>
      </div>




      </div>

      <div className="ml-6 col-span-2">
      <div className="gap-4 grid grid-cols-3 md:grid-cols-3" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

        <div className="">
        <img src="https://i.ibb.co/990gF8t/istockphoto-1075455058-612x612.jpg" alt="Shoes" className="w-[200px] h-[200px] rounded-full mx-auto" />
        <h2 className="font-bold text-center" >Oliver</h2>
        <h2 className="font-bold mt-2 text-center">Chief Technical Officer</h2>
        </div>
        <div className="">
        <img src="https://i.ibb.co/6DVCz00/istockphoto-1317804584-612x612.jpg" alt="Shoes" className="w-[200px] h-[200px] rounded-full  mx-auto" />
        <h2 className="font-bold text-center" >Angela</h2>
        <h2 className="font-bold mt-2 text-center">Chief Marketing Officer</h2>
        </div>
        <div className="">
        <img src="https://i.ibb.co/Jjb9GZQ/istockphoto-1364917563-612x612.jpg" alt="Shoes" className="w-[200px] h-[200px] rounded-full  mx-auto" />
        <h2 className="font-bold text-center" >Michael</h2>
        <h2 className="font-bold mt-2 text-center">Chief Strategy Officer</h2>
        </div>

        
      </div>
      <div className="grid gap-4 grid-cols-3 md:grid-cols-3" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

        <div className="">
        <img src="https://i.ibb.co/Bttsd9J/360-F-330185963-Xg-QLEwsl-G1-Gbd7uv-JDidj-OWa0nj6-CJr-Z.jpg" alt="Shoes" className="w-[200px]  mx-auto h-[200px] rounded-full" />
        <h2 className="font-bold text-center" >Sara Tylor</h2>
  <h2 className="font-bold mt-2 text-center">Research Analytics Specialist</h2>
        </div>
        <div className="">
        <img src="https://i.ibb.co/nnJWpr4/360-F-142201762-q-MCu-IAolgpz4-Nb-F5-T5m66-KQJz-Yzr-Eb-Uv.jpg" alt="Shoes" className="w-[200px]  mx-auto h-[200px] rounded-full" />
        <h2 className="font-bold text-center" >Philips</h2>
  <h2 className="font-bold mt-2 text-center">Human Resources Manager</h2>
        </div>
        <div className="">
        <img src="https://i.ibb.co/QcMXqJ9/istockphoto-1297832726-612x612.jpg" alt="Shoes" className="w-[200px] h-[200px] rounded-full  mx-auto" />
        <h2 className="font-bold text-center" >Curran</h2>
  <h2 className="font-bold mt-2 text-center">Chief Fashion Manager</h2>
        </div>

        
      </div>

      </div>

     </div>

    </div>
  );
};

export default Member;