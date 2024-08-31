import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
  const { data, loading, error } = useFetch("hotels/countByCity?cities=tokyo,osaka,japan");

  return (
    <div className='featured'>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : error ? (
        <div className='error'>Error loading data. Please try again later.</div>
      ) : (
        data && data.length > 0 && (
          <>
            {['Tokyo', 'Osaka', 'Japan'].map((city, index) => (
              <div className='featuredItem' key={city}>
                <img 
                  src={
                    index === 0 ? 'https://images.pexels.com/photos/962989/pexels-photo-962989.jpeg?auto=compress&cs=tinysrgb&w=600' :
                    index === 1 ? 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=600' :
                    'https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg?auto=compress&cs=tinysrgb&w=600'
                  }
                  alt={city}
                  className='featuredImg'
                />
                <div className='featuredTitle'>
                  <h1>{city}</h1>
                  <h2>{data[index] ? `${data[index]} properties` : 'No properties available'}</h2>
                </div>
              </div>
            ))}
          </>
        )
      )}
    </div>
  );
}

export default Featured;
