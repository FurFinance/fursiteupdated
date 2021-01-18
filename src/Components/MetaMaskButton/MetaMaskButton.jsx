import React from 'react'
import { useEffect } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
import { useState, useContext } from 'react'
import Context from '../../Context/ReactContext'

import './MetaMaskButton.scss'

export default function MetaMaskButton() {
    const [maskProvider, setMaskProvider] = useState()
    const [maskAccount, setMaskAccount] = useState()

    const myContext = useContext(Context)

    return (
        <>
            {myContext.maskProvider ? (
                <>
                    {myContext.maskAccount ? (
                        <a className='MetaMaskButton'>
                            {`${myContext.maskAccount.substring(0, 5)}...${myContext.maskAccount.substring(
                                myContext.maskAccount.length - 4,
                                myContext.maskAccount.length
                            )}`}
                            &nbsp;&nbsp;
                            <img
                                src='/ether-avatar.png'
                                alt=''
                                style={{ padding: '0', borderRadius: '100%', width: '1rem', height: '1rem' }}
                            />
                        </a>
                    ) : (
                        <a className='MetaMaskButton' onClick={myContext.connectMetaMask}>
                            Connect MetaMask
                        </a>
                    )}
                </>
            ) : (
                <>
                    <a className='MetaMaskButton' onClick={() => (window.location.href = 'http://metamask.io/')}>
                        Install MetaMask
                    </a>
                </>
            )}
        </>
    )
}
