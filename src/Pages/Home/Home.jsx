import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/footer";
import Member from "../../components/members/Member";




const Home = () => {
 
  


  return (
    <div>
        
        
      <Banner></Banner>
      <div className="grid grid-cols-4">
        <div className=" col-span-3">
          <Cards></Cards>
        </div>
        <div className=" col-span-1">
          <Sidebar></Sidebar>
        </div>
      </div>
      <Member></Member>
      <Footer></Footer>
    </div>
  );
};

export default Home;