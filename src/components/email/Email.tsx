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
            <label htmlFor="#">{props.label}</label>
            <input type="text" className={`${Styles.without_error}`} placeholder='email@example.com'/>
            <p style={{ display: (props.showMessageError ? 'block' : 'none') }}>
                Please enter a valid email adress
            </p>
        </div>
    )
}