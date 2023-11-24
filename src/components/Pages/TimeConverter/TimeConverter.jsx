import styles from './TimeConverter.module.css'
import { useState } from 'react'
import Result from './Result/Result'

export default function TimeConverter() {
    const [number, setNumber] = useState();
    const [convertFrom, setConvertFrom] = useState("");
    const [convertTo, setConvertTo] = useState("");
    const [result, setResult] = useState(0);

    function handleChange(e) {
        setNumber(e.target.value);
        setResult(false);
    }
    function showResult() {
        setResult(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <div>
                    <p>Please select which values you want to convert</p>
                    <div className={styles.selectValues}>
                        <select value={convertFrom} onChange={(e) => { setConvertFrom(e.target.value); setResult(false) }}>
                            <option></option>
                            <option>Seconds</option>
                            <option>Minutes</option>
                            <option>Hours</option>
                        </select>
                        <div>
                            <span className={styles.arrow}>&#8594;</span>
                        </div>
                        <select value={convertTo} onChange={(e) => { setConvertTo(e.target.value); setResult(false) }}>
                            <option></option>
                            <option>Seconds</option>
                            <option>Minutes</option>
                            <option>Hours</option>
                        </select>
                    </div>
                    <div className={styles.inputValues}>
                        <input type="number" name="from" placeholder='Enter number' value={number} onChange={handleChange} autocomplete="off" />
                    </div>
                    <button className={styles.submitbtn} onClick={showResult}>Calculate</button>
                </div>
            </div>
            {result?<Result number={number} convertFrom={convertFrom} convertTo={convertTo} result={result}/>:""}
        </div>
    )
}
