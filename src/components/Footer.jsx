import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-full text-white bg-violet-600 p-4'>
    <div className='flex justify-between p-4'>
        {/* intro */}
        <div style={{width:'400px'}}>
            <h5 className='font-bold'>  <i class="fa-solid fa-truck-fast"> </i> E-cart</h5>
            <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
            <p>coe liscenced Luminar,docs cc by 3,0</p>
            <p>Currently v5.3.2</p>
        </div>
        {/* links */}
          <div className='flex flex-col'>
            <h5 className='font-bold'>Links</h5>
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing page</Link>
            <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home page</Link>
            <Link to={'/history'} style={{textDecoration:'none', color:'white'}}>History page</Link>
            
          </div>
        {/* guide */}
        <div className='flex flex-col '>
            <h5 className='font-bold'>Guides</h5>
            <a href="https://react.dev/" style={{textDecoration:'none', color:'white'}}>React</a>
            <a href="https://react-bootstrap.netlify.app/" style={{textDecoration:'none', color:'white'}}>React Bootstrap</a>
            <a href="https://www.npmjs.com/package/react-router-dom" style={{textDecoration:'none', color:'white'}}>React Router</a>
            
          </div>
        {/* contact */}
        <div className='flex flex-col'>
          <h5 className='font-bold'>Contact Us</h5>
          <div className='flex'>
            <input type="text" placeholder='Enter your E-mail' className='rounded p-1' />
            <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='flex justify-between mt-3'>
            <a href="https://fontawesome.com/" style={{textDecoration:'none ', color:'white'}}> <i class="fa-brands fa-twitter"></i></a>

            <a href="https://fontawesome.com/" style={{textDecoration:'none ', color:'white'}}> <i class="fa-brands fa-linkedin"></i></a>

            <a href="https://fontawesome.com/" style={{textDecoration:'none ', color:'white'}}> <i class="fa-brands fa-facebook"></i></a>

            <a href="https://fontawesome.com/" style={{textDecoration:'none ', color:'white'}}><i class="fa-brands fa-instagram"></i> </a>

            <a href="https://fontawesome.com/" style={{textDecoration:'none ', color:'white'}}><i class="fa-brands fa-github"></i> </a>

            <a href="https://fontawesome.com/" style={{textDecoration:'none ', color:'white'}}><i class="fa-solid fa-phone"></i> </a>


          </div>
        </div>
    </div>
</div>
  )
}

export default Footer