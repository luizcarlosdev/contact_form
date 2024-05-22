import Styles from './Radio.module.css';

interface ItemsRadio {
    label: string;
    name: string;
}

export default function Radio() {
    return (
        <div className={Styles.radio_grid}>
            <div className={Styles.radio_grid_header}>
                <h4>query type</h4>
            </div>
            <div className={Styles.radio_grid_body}>
                <div className={Styles.radio_section}>
                    <input type="radio" name="" id="" />
                    <label htmlFor="">general enquiry</label>
                </div>
            </div>
        </div>
    )
}