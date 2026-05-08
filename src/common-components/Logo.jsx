import './styles/Logo.css'

function Logo()
{
    return (
        <a
        className="logo-link"
        href="#">
            <img
            className='logo-link__icon'
            src="/logo.svg"
            alt="Logo"/>
        </a>
    )    
}

export default Logo