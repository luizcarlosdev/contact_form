import { ChangeEventHandler, MouseEventHandler } from 'react'
import Styles from './Email.module.css';

interface ItemsEmail {
    label: string;
    type: string;
    showMessageError?: boolean;
    action: ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function Email(props: ItemsEmail) {
    return (
        <div className={`${Styles.input_area}`}>
            <label htmlFor="email">{props.label}</label>
            <input type="text" className={`${Styles.without_error}`} id='email' placeholder='email@example.com' onChange={props.action}/>
            <p style={{ opacity: (props.showMessageError ? '1' : '0') }}>
                Please enter a valid email adress
            </p>
        </div>
    )
}