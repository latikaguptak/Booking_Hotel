import useFetch from '../../hooks/useFetch';
import './FeaturedPropertyList.css';

const FeaturedPropertyList = () => {
  const { data, loading, error } = useFetch("hotels?featured=true&limit=6");

  return (
    <div className='fp'>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : error ? (
        <div className='error'>Error fetching properties. Please try again later.</div>
      ) : (
        <>
          {data.map((item) => (
            <div key={item?._id} className='fpItem'>
              <img 
                src='https://hips.hearstapps.com/hmg-prod/images/hoshinoya-kyoto-floating-tearoom-3-1549906559.jpg' 
                alt={item?.name}
                className='fpImg'
              />
              <span className='fpName'>{item?.name}</span>
              <span className='fpCity'>{item?.city}</span>
              <span className='fpPrice'>Starting from ${item?.cheapestPrice}</span>
              {item?.rating && (
                <div className='fpRating'>
                  <button>{item?.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FeaturedPropertyList;
