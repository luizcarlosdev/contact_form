import { ChangeEventHandler, MouseEventHandler } from 'react'
import Styles from './Input.module.css';

interface ItemsInput {
    label: string;
    type: string;
    showMessageError: boolean;
    action?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function Input(props: ItemsInput) {
    return (
        <div className={`${Styles.input_area}`}>
            <label htmlFor="#">{props.label}</label>
            <input type="text" className={`${Styles.without_error}`} onChange={props.action}/>
            <p style={{ opacity: (props.showMessageError ? '1' : '0') }}>
                This field is required
            </p>
        </div>
    )
}