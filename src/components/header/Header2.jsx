import React from 'react'
import './style.css'
import Logo from '../../assets/logo.svg'
class Headertwo extends React.Component
{
    render()
    {
        return (
            <>
            <div className='container'>
                <div className='header-full'>
                    <div className='container-inner'>
                        <div className='row1'>
                            <img src={Logo} />
                        </div>
                        <div className='row2'>
                            <ul>
                                <li>Home1</li>
                                <li>Home2</li>
                                <li>Home4</li>
                                <li>Home5</li>
                            </ul>
                        </div>

                        <div className='row2'>

                        </div>
                    </div>
                </div>
                <h1>Hello</h1>
            </div>
            </>
        );
    }
}
export default Headertwo