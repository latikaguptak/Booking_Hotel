import useFetch from '../../hooks/useFetch'
import './FeaturedPropertyList.css'

const FeaturedPropertyList = () => {
    const { data , loading, error} = useFetch("hotels?featured=true&limit=6")
    console.log(data)
    return (
        <div className='fp'>
        {loading ? (<div className='loading'>Loading...</div> ):
        (
        <>
        
        {data.map((item) => (<>
        
            
            <div key={item?._id} className='fpItem'>
            {/* {
                item?.photos.map((image, index) => (
                    <img key={index} src={image.src} alt='' className='fpImg' />
                ))
            } */}
            <img 
            src ='https://hips.hearstapps.com/hmg-prod/images/hoshinoya-kyoto-floating-tearoom-3-1549906559.jpg' 
            alt=''
            className='fpImg'
            />
        
            <span className='fpName'>{item?.name}</span>
            <span className='fpCity'>{item?.city}</span>
            <span className='fpPrice'>Starting from $ {item?.cheapestPrice}</span>
            {item?.rating && <div className='fpRating'>
            <button>{item?.rating}</button>
            <span>Exellent</span>
            </div>
            } 
            <span className='fpLocation'></span>
            
            </div>
        
        
            
            </>))}

        </>
            )}
    </div>
  )
}

export default FeaturedPropertyList