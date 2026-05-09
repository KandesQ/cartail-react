import './styles/Logo.css'

function Logo({
    className=""
})
{
    return (
        <a
        className={`logo-link ${className}`}
        href="#">
            <img
            className='logo-link__icon'
            src="/logo.svg"
            alt="Logo"/>
        </a>
    )    
}

export default Logo