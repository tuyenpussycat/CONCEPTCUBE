import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'
Header.propTypes = {
    
};

function Header(props) {
    return (
        <div>
            <section className='header'>
                <div className='container'> 
                    <div className='header__background'>
                        <img src='../../img/logo.png'></img>
                        <div className='header__link'>
                            <ul>
                                <li><a href='#'>INTRODUCTION</a></li>
                                <li><a href='#'>SOLUTION</a></li>
                                <li><a href='#'>RATE PLAN</a></li>
                         
                                <li><a href='#'>LOGIN</a></li>
                                <li><a href='#'>APPLY FOR FREE USE</a></li>
                            </ul>
                        </div>
                    </div>
                  
                </div>
               
         
            </section>
            <section className='hero'>
               <div className='container'>
               
               </div>
            </section>
             {/* <section className='whatfirst'>
                <img src='../../img/contentbody.PNG'></img>
            </section> */}
            
        </div>
        
    );
  
        
}

export default Header;