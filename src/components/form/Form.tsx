"use client";
import { useState } from 'react';
import Styles from './Form.module.css';
import Input from '../input/Input';
import Email from '../email/Email';
import Radio from '../Radio/Radio';

export default function Form() {
    const [name, setName] = useState<string>('');
    const [showMsgErrorName, setShowMsgErrorName] = useState<boolean>(false);
    const [lastName, setLastName] = useState<string>('');
    const [showMsgErrorLastName, setShowMsgErrorLastName] = useState<boolean>(false);
    const [emailValue, setEmailValue] = useState<string>('');
    const [emailError, setEmailError] = useState<boolean>(false);
    const [radioError, setRadioError] = useState<boolean>(false);
    const [showRadioError, setShowRadioError] = useState<boolean>(false);
    const [textAreaValue, setTextAreaValue] = useState<string>('');

    function validityEmail(event: string) {
        setEmailError(true)
        const value = event;
        if ((value.includes("@gmail") || value.includes("@outlook")) && value.endsWith(".com")) {
            setEmailError(false);
        }
    }

    function submitForm() {
        if (name != '') {
            setShowMsgErrorName(false);
            console.log(name);
        } else {
            setShowMsgErrorName(true);
        }
        if (lastName != '') {
            setShowMsgErrorLastName(false);
            console.log(lastName);
        } else {
            setShowMsgErrorLastName(true);
        }
        if (emailValue != '') {
            setEmailError(false);
            console.log(emailValue);
        } else {
            setEmailError(true);
        }
        if (radioError) {
            setShowRadioError(false);
        } else {
            setShowRadioError(true);
        }
        if (textAreaValue != '') {
            console.log(textAreaValue);
        } else {

        }
    }
    return (
        <div className={Styles.form}>
            <div className={Styles.form_header}>
                <h1>contact us</h1>
            </div>
            <div className={Styles.form_group}>
                <div className={Styles.form_group_name}>
                    <Input
                        label='first name'
                        showMessageError={showMsgErrorName}
                        type='text'
                        action={(event) => setName(event.target.value)} />
                    <Input
                        label='last name'
                        type='text'
                        showMessageError={showMsgErrorLastName}
                        action={(event) => { setLastName(event.target.value) }} />
                </div>
                <div className={Styles.form_group_email}>
                    <Email label='email adress' type='text' showMessageError={emailError} action={(event) => {
                        validityEmail(event.target.value);
                        setEmailValue(event.target.value)
                    }} />
                </div>
                <div className={Styles.form_group_radio}>
                    <div className={Styles.form_group_radio_header}>
                        <label>query type</label>
                    </div>
                    <div className={Styles.form_group_radio_body}>
                        <Radio label='general enquiry' id='input_one' name='radio_query' action={(event) => setRadioError(true)} />
                        <Radio label='support request' id='input_two' name='radio_query' action={(event) => setRadioError(true)} />
                    </div>
                    <p style={{ display: (showRadioError ? 'block' : 'none') }}>This field is required</p>
                </div>
                <div className={Styles.form_group_message}>
                    <label htmlFor="message_area">message</label>
                    <textarea id="message_area" style={{ resize: 'none' }} onChange={(event) => setTextAreaValue(event.target.value)}></textarea>
                </div>
                <div className={Styles.form_group_checkbox}>
                    <div className={Styles.form_group_checkbox_header}>
                        <input type="checkbox" id="consent" />
                        <label htmlFor="consent">i consent to being contacted by the team</label>
                    </div>
                    <p style={{ display: 'none' }}>To submit this form, please consent to being contacted</p>
                </div>
            </div>
            <div className={Styles.submit}>
                <button onClick={submitForm}>submit</button>
            </div>
        </div>
    )
}