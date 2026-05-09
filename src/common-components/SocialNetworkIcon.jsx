import './styles/SocialNetworkIcon.css'

function SocialNetworkIcon({
    link = "#",
    name,
    defaultIconRef,
    hoveredIconRef
})
{
    return (
        <a
        className="social-network-icon"
        href={link}>
            <img
            className="social-network-icon--default"
            src={defaultIconRef} 
            alt={`Default ${name} icon`}/>

            <img
            className="social-network-icon--hovered"
            src={hoveredIconRef}
            alt={`Hovered ${name} icon`}/>
        </a>
    )    
}

export default SocialNetworkIcon