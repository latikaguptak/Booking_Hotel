import './MailList.css'

const MailList = () => {
  return (
    <>
    <div className='mail'>
        <h1 className='mailTitle'>Save Time Save Money</h1>
        <span className='mailDesc'>Sign up and subscribe </span>
        <div className='mailInputContainer'>
          <input className='mailInput' type='text' placeholder='Enter Email' />
          <button className='mailButton'>Subscribe</button>
        </div>
        <span className='mailText'> We will never share your email with anyone else.</span> 
    </div>
    </>
  )
}

export default MailList