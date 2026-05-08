import './styles/PhoneIcon.css'

function PhoneIcon()
{
    return (
        <div className='phone-icon-wrapper'>
            <img
            className="phone-icon--default"
            src="/phone.svg"
            alt="Phone"/>

            <img
            className="phone-icon--hovered"
            src="/hovered-phone.svg" 
            alt="Hovered phone"/>
        </div>
    )    
}

export default PhoneIcon