import styles from '../../styles/Home.module.css';
import {useEffect, useState} from 'react';

export default function Problem1({input}: {input: string}) {
    const [output, setOutput] = useState<string>();
    useEffect(() => {
        setOutput(calculateOutput(input));
    }, [input]);
    return <section className={styles.problem}>
        <h1>Problem #1</h1>
        <label htmlFor="problem1Input">Input:</label>
        <textarea id="problem1Input" value={input} readOnly={true} />
        <label htmlFor="problem1Output">Output:</label>
        <textarea id="problem1Output" value={output} readOnly={true} />
    </section>;
}

function calculateOutput(input: string): string {
    // TODO: Develop this function
    return 'test';
}