import './FeaturedPropertyList.css'

const FeaturedPropertyList = () => {
  return (
    <div className='fp'>
        <div className='fpItem'>
            <img src ='https://oimages.elitehavens.com/images/gallery/lowres/P00459/Villa%20Nimaya%20-%20Listing.jpg'
            alt=''
            className='fpImg'/>
            <span className='fpName'>Villas</span>
            <span className='fpCity'>NewYork</span>
            <span className='fpPrice'>Starting from $100</span>
            <div className='fpRating'>
                <button>8.9</button>
                <span>Exellent</span>
            </div>
            <span className='fpLocation'></span>

        </div>
        <div className='fpItem'>
            <img src='https://oimages.elitehavens.com/images/gallery/lowres/P00459/Villa%20Nimaya%20-%20Listing.jpg'
            alt=''
            className='fpImg'/>
            <span className='fpName'>Villas</span>
            <span className='fpCity'>London</span>
            <span className='fpPrice'>Starting from $100 </span>
            <div className='fpRating'>
                <button>8.9</button>
                <span>Exellent</span>
            </div>
            <span className='fpLocation'></span>

        </div>
        <div className='fpItem'>
            <img src='https://oimages.elitehavens.com/images/gallery/lowres/P00459/Villa%20Nimaya%20-%20Listing.jpg'
            alt=''
            className='fpImg'/>
            <span className='fpName'>Villas</span>
            <span className='fpCity'>London</span>
            <span className='fpPrice'>Starting FRom $100</span>
            <div className='fpRating'>
                <button>8.9</button>
                <span>Exellent</span>
            </div>
            <span className='fpLocation'></span>

        </div> <div className='fpItem'>
            <img src='https://oimages.elitehavens.com/images/gallery/lowres/P00459/Villa%20Nimaya%20-%20Listing.jpg'
            alt=''
            className='fpImg'/>
            <span className='fpName'>Villas</span>
            <span className='fpCity'>London</span>
            <span className='fpPrice'>Starting From $100</span>
            <div className='fpRating'>
                <button>8.9</button>
                <span>Exellent</span>
            </div>
            <span className='fpLocation'></span>

        </div>
    </div>
  )
}

export default FeaturedPropertyList