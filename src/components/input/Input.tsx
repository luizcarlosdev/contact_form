import { ChangeEventHandler, MouseEventHandler } from 'react'
import Styles from './Input.module.css';

interface ItemsInput {
    label: string;
    type: string;
    showMessageError?: boolean;
}

export default function Input(props: ItemsInput) {
    return (
        <div className={`${Styles.input_area}`}>
            <label htmlFor="#">{props.label}</label>
            <input type="text" className={`${Styles.without_error}`} />
            <p style={{ display: (props.showMessageError ? 'block' : 'none') }}>
                This field is required
            </p>
        </div>
    )
}