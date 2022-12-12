import { ArrowUp, WhatsappLogo } from "phosphor-react"
import './Float.scss'


function Float() {
    function backToTop() {
        window.scrollTo(0, 0)
    }

    return (
        <div className="float">
            <a onClick={backToTop} id="arrowUp" className="logo">
                <ArrowUp size={32} />
            </a>
        </div>
    )

}

export default Float