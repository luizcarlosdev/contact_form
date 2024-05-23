import { ChangeEventHandler, MouseEventHandler } from 'react';
import Styles from './Radio.module.css';

interface ItemsRadio {
    label: string;
    name: string;
    id: string;
    action: ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function Radio(props: ItemsRadio) {
    return (
        <div className={Styles.radio}>
            <input type="radio" name="query_type" id={props.id} onChange={props.action}/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}