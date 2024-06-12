import Featured from '../../components/Featured/Featured.jsx';
import FeaturedPropertyList from '../../components/featuredPropertyList/FeaturedPropertyList.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import MailList from '../../components/MailList/MailList.jsx';
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
      <div className='homefeaturdeProp'>Home guest love</div>
      <FeaturedPropertyList/>
      <MailList/>
      <Footer/>
      
      
  </div>
    </>
  )
}

export default Home