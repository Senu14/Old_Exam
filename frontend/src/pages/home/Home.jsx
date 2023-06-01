import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import './home.css';

function Home() {
  return (
    <>
    <NavBar />
    <h1 className='title'>Vi elsker at lave brøde</h1>
    <h2 className='subtitle'>Vi skaber lækkert! brøde</h2>
    
    <p className='para'>Der er mange tilgængelige udgaver af Lorem ipsum 
                        dolor sit amet consectetur adipisicing elit. 
                        Dicta nam perferendis aliquam explicabo,autem 
                        odit libero. <br /> inventore quibusdam soluta possimus 
                        provident qui fuga facilis aspernatur nostrum 
                        dolore illo tenetur officia!
    </p>
    <div className="collcet">
 
    <img className='image' src={require('../../Billeder/br├╕d/article.jpg')} alt='' />
    <img className='image' src={require('../../Billeder/br├╕d/article2.jpg')} alt='' />
    <img className='image' src={require('../../Billeder/br├╕d/article3.jpg')} alt='' />
    </div>

 <div className="sub-collect">

    <h2 className='sub'>Vi elsker brøde</h2>
    
    <h2 className='sub'>Vi elsker brøde</h2>
    

    <h2 className='sub'>Vi elsker brøde</h2>
    
    
</div>
  <div className="commen">
  <p>Der er mange tilgængelige <br />udgaver af  Lorem ipsum 
    dolor sit<br />  amet consectetur adipisicing elit.</p>
                  
  <p>Der er mange tilgængelige<br />  udgaver  af Lorem ipsum 
    dolor sit<br />  amet  consectetur adipisicing elit.</p>
                    
  <p>Der er mange tilgængelige <br />  udgaver af Lorem ipsum 
    dolor sit <br />  amet consectetur adipisicing elit.</p>
</div>
<div>
</div>

    <Footer />
    </>
  )
}

export default Home