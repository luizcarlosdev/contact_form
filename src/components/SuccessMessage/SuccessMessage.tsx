import Styles from './SuccessMessage.module.css';
import { FaRegCheckCircle } from "react-icons/fa";

interface VisibilityMessage {
    showMsg: boolean;
}

export default function SuccessMessage(props: VisibilityMessage) {
    return (
        <div className={Styles.message} style={{ opacity: (props.showMsg ? '1' : '0') }}>
            <div className={Styles.message_header}>
                <span><FaRegCheckCircle /></span>
                <p>Message Sent!</p>
            </div>
            <div className={Styles.message_body}>
                <p>Thanks for completing the form. We`ll be in touch soon!</p>
            </div>
        </div>
    )
}