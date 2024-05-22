import {useState} from 'react';
import Styles from './Form.module.css';
import Input from '../input/Input';
import Email from '../email/Email';
import Radio from '../Radio/Radio';

export default function Form() {
    return (
        <div className={Styles.form}>
            <div className={Styles.form_header}>
                <h1>contact us</h1>
            </div>
            <div className={Styles.form_group}>
                <div className={Styles.form_group_name}>
                    <Input label='first name' type='text'/>
                    <Input label='last name' type='text'/>
                </div>
                <div className={Styles.form_group_email}>
                    <Email label='email adress' type='text'/>
                </div>
                <div className={Styles.form_group_radio}>
                    <Radio />
                </div>
            </div>
        </div>
    )
}