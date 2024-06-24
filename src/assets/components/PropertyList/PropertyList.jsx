import React from 'react';
import useFetch from '../../hooks/useFetch';
import './Property.css';

const PropertyList = () => {
    const { data, loading, error } = useFetch("/hotels/countByType");
    console.log("propD", data);

    const images = [
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
        "https://cf.bstatic.com/xdata/images/hotel/square600/525952749.webp?k=d7d09019773dc62d120b4acbc1cfaccca9a46701fb2b8f9053950a739194e003&o=",
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max300/268235690.webp?k=10c5ecff5ad2b095a78efd2e025b24aead059fd81fe66a09ad333e7d173d2ae6&o=",
        "https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=",
       
    ];

    return (
        <div className='pList'>
            {loading ? (
                <div className='Loading'>Loading...</div>
            ) : error ? (
                <div className='Error'>Error fetching data. Please try again later.</div>
            ) : (
                <>
                    {data && images.map((img, index) => (
                        <div key={index} className='pListItem'>
                            <img src={img} alt='' className='pListImg' />
                            <div className='pListTitle'>
                                <h2>{data[index]?.type} </h2>
                                <h3>{data[index]?.count} {data[index]?.type}</h3>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default PropertyList;
