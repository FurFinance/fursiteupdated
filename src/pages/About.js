import React, { Component } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'

//import components
import BlueSection from '../Components/aboutBlueSection/BlueSection.js'

//import styles
import '../pagesStyle/About.scss'

//import the images
import TradingPhoto from '../images/TradingPhoto.gif'
import Happy from '../images/Happy.png'

//import aos for scroll effects
import AOS from 'aos'
import 'aos/dist/aos.css'

class About extends Component {
    state = {
        value: 'test'
        // authenticated: false
    }



    componentDidMount() {
        AOS.init({
            duration: 2000
        })

        // const MetaMask = async () => {
        //     const MaskProvider = await detectEthereumProvider()
        //     if (MaskProvider) {
        //         await MaskProvider.enable()

        //         if (!MaskProvider.selectedAddress) {
        //             window.location.href = '/'
        //         } else {
        //             this.setState({ authenticated: true })
        //         }
        //     }

        //     if (!MaskProvider) {
        //         window.location.href = '/'
        //     } else {
        //         this.setState({ authenticated: true })
        //     }
        // }

        // if (window.ethereum?.selectedAddress) {
        //     this.setState({ authenticated: true })
        // } else {
        //     MetaMask()
        // }
    }

    render() {

        // if (!this.state.authenticated) return <div className='aboutSectionWrapper'>Loading...</div>
        return (
            <>
                <div className='aboutSectionWrapper'>
                    <h1>
                        <span>ABOUT</span>
                    </h1>

                    {/* starting the grid system */}

                    <div className='leftTextAndSideImage'>
                        <div className='leftSideText'>
                            <div data-aos='fade-right'>
                                <h3><b>What is fur.finance?</b></h3>
                                <b>Fur.finance is a platform for simple decentralised finance<br /> products for high
                                risk-adjusted returns.</b>
                                <p></p>
                            </div>
                        </div>
                        <img src={TradingPhoto} alt='tradingPhoto' />
                    </div>

                    <div className='moreInfo'>
                        <div className='row1'>
                            <div data-aos='fade-up'></div>
                        </div>
                        <div className='row2'>
                            <div data-aos='fade-up'> </div>
                        </div>
                        <div className='row3'>
                            <div data-aos='fade-up'></div>
                        </div>
                    </div>

                    {/* ending the grid system */}
                </div>
                <BlueSection />
            </>
        )
    }
}

export default About
