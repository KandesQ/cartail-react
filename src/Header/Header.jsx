import PhoneLink from '../common-components/PhoneLink'
import PhoneIcon from '../common-components/PhoneIcon'
import Logo from '../common-components/Logo'

import './Header.css'


function Header()
{
    return (
        <header>
            <div className="header__menu">
                <Logo />

                <PhoneLink>
                    <h3 className='phone-number'>
                        8 (800) 852 78-87
                    </h3>

                    <PhoneIcon />
                </PhoneLink>
            </div>
        </header>
    ) 
}

export default Header