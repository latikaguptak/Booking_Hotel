import Featured from '../../components/Featured/Featured.jsx';
import FeaturedPropertyList from '../../components/featuredPropertyList/FeaturedPropertyList.jsx';
import Header from '../../components/Header/Header.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import PropertyList from './../../components/PropertyList/PropertyList';
import'./Home.css';
const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>

    <div className='homeContainer'>
      <Featured/>
      <div className='homeTitle'>Browse By Property Type
</div>
      <PropertyList />
      <div className='homefeaturdeProp'>Browse By Location</div>
      <FeaturedPropertyList/>
      
  </div>
    </>
  )
}

export default Home