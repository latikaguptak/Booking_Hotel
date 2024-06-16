import './SearchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src='https://oimages.elitehavens.com/images/gallery/lowres/P00459/Villa%20Nimaya%20-%20Listing.jpg' 
        alt=''
        className='siImg'/>
        <div className='siDesc'>
            <h1 className='siTitle'>Tower Street Appartments</h1>
            <span className='siDistance'>500m from center</span>
            <span className='siTaxiOp'>Free Airport Taxi</span>
            <span className='siSubtitle'>Studio Appartments with Air Conditioning</span>
            <span className='siFeatures'>
                Entire studio 1 bathroom 21m squre 1 Full Bed
            </span>
            <span className='si CancelOp'>Free Cancellation </span>
            <span className='siClassNameOpSubTitle'> 
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className='siDetails'>
            <div className='siRatting'>
                <span>Exillent</span>
                <button>8.9</button>
            </div>
            <div className='siDetailsTaxes'>
                <span className='siPrice'>$123</span>
                <span className='siTaxOp'>Includes taxes and fees</span>
                <button className='siCheckButton'>See avalability</button>
            </div>
        </div>
    

    </div>
  )
}

export default SearchItem