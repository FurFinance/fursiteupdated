import React from 'react'

import { AiFillStar } from 'react-icons/ai'

import '../pagesStyle/Blog.scss'

//import other components
import Pannels from '../Components/Pannels/Pannels'
import Button from '../Components/Button/Button'
//effects
import AOS from 'aos'
import 'aos/dist/aos.css'

import Smallpannel from '../Components/smallpannel/Smallpannel'

import logophoto from '../images/logophoto.png'
import smallpannel from '../Components/smallpannel/Smallpannel'

const Home = ({ Title, subTitle }) => {
    return (
        <>
            <div className='secondContent'>
                <div className='wrapper'>
                    <div className='starsWrapper'>
                        <div data-aos='fade-right'>
                            <p>farms のうじょう</p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                {/* <div data-aos='fade-up' data-aos-duration='1500'>
                    <Pannels />
                </div> */}
            </div>

            <div className='title' style={{ height: 'auto', paddingTop: '13rem' }}>
                <div data-aos='zoom-in'>
                    <h1>{Title}</h1>
                </div>
                <div data-aos='zoom-in'>
                    <p>{subTitle}</p>
                </div>
                <img className='lastphoto' src={logophoto} style={{ margin: '3rem 0' }} />
            </div>
            <div className='here'>
                <div className='smallpannels-wrapper' style={{ paddingBottom: '13rem' }}>
                    <Smallpannel />
                    <Smallpannel />
                    <Smallpannel />
                    <Smallpannel />
                    <Smallpannel />
                </div>
            </div>

            {/* <div className='tradeButtonParent'>
                <Button link='https://www.uniswap.exchange'>Trade Now</Button>
            </div> */}
        </>
    )
}

export default Home
