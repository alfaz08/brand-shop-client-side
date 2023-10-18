

const Banner = () => {
  return (
    <div>
      <div className="hero h-72 md:h-[450px] border border-purple-500" style={{backgroundImage: 'url(https://i.ibb.co/Dkbpkqb/maxresdefault.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md flex">
    <input type="text" placeholder="Brand Name" className=" bg-white md:w-96 text-black p-2 rounded-md shadow-md" />
    <button className="btn bg-purple-500 text-white hover:bg-[#ecb3ff] hover:text-black">Search</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;