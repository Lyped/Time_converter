import styles from './Result.module.css'

function box(convertFrom, convertTo, number, result) {
    return (
        <div className={styles.box}>
            <span className={styles.number}>{number}</span> {convertFrom} will be <span className={styles.number}>{result}</span> {convertTo}
        </div>
    )
}

export default function Result(props) {
    if (props.convertFrom === props.convertTo) {
        return (

            <div className={styles.box}>
                Unavailable to make conversion from {props.convertFrom} to {props.convertTo}
            </div>
        )
    } else {
        switch (props.convertFrom) {
            case 'Seconds':
                if (props.convertTo === 'Minutes') {
                    let result = props.number / 60
                    return (box(props.convertFrom, props.convertTo, props.number, result));
                }
                if (props.convertTo === 'Hours') {
                    let result = props.number / 3600
                    return (box(props.convertFrom, props.convertTo, props.number, result));
                }
                break;
            case 'Minutes':
                if (props.convertTo === 'Seconds') {
                    let result = props.number * 60
                    return (box(props.convertFrom, props.convertTo, props.number, result));
                }
                if (props.convertTo === 'Hours') {
                    let result = props.number / 60
                    return (box(props.convertFrom, props.convertTo, props.number, result));
                }
                break;

            case 'Hours':
                if (props.convertTo === 'Seconds') {
                    let result = props.number * 3600
                    return (box(props.convertFrom, props.convertTo, props.number, result));
                }
                if (props.convertTo === 'Minutes') {
                    let result = props.number * 60
                    return (box(props.convertFrom, props.convertTo, props.number, result));
                }
                break;

            default:
                return 'theres no default';
        }
    }
}