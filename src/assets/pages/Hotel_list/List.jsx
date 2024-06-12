import './List.css'
import Navbar from './../../components/Navbar/Navbar';
import Header from './../../components/Header/Header';

const List =() =>{
  return (
    <div>
      <Navbar/>
      <Header type ="list"/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
          <h1 className='lsTitle'> Search </h1>
          </div>
          <div className='listResults'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default List;