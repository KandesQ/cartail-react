import './styles/PhoneLink.css'

function PhoneLink({ children })
{
    return (
        <a 
        href='tel:+78008527887'
        className='phone-link'>
            { children }
        </a>
    )    
}

export default PhoneLink