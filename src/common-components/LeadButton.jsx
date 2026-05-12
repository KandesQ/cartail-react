import './styles/LeadButton.css'

export default function LeadButton({ text })
{
    return (
        <button className="lead-button">
            <h4 className="lead-button__text">
                {text}
            </h4>

            <img
            className="lead-button__click-icon"
            src="/click.svg"
            alt="Click" />
        </button>
    )
}