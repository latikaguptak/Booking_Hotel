import Featured from '../../components/Featured/Featured.jsx';
import Header from '../../components/Header/Header.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import './Home.css';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>

    <div className='hotelContainer'>
      <Featured/>

    </div>
    </>
  )
}

export default Home