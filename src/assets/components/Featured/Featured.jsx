import './featured.css'

const Featured = () => {
  return (
    <>
    <div className='featured'>
      <div className='featuredItems'>
        <img src='https://images.pexels.com/photos/962989/pexels-photo-962989.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='featuredImg'/>
        <div className='featuredTitle'>
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>

      </div>
      <div className='featuredItems'>
        <img src='https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='featuredImg'/>
        <div className='featuredTitle'>
          <h1>Australia</h1>
          <h2>123 properties</h2>
        </div>

      </div>
      <div className='featuredItems'>
        <img src='https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='featuredImg'/>
        <div className='featuredTitle'>
          <h1>London</h1>
          <h2>123 properties</h2>
        </div>

      </div>

    </div>
    </>
  )
}

export default Featured