import styles from '../../styles/Home.module.css';
import {useEffect, useState} from 'react';
import Problem1Solver from '../services/Problem1Solver';

export default function Problem1({inputString}: {inputString: string}) {
    const [output, setOutput] = useState<string>();
    useEffect(() => {
        let parsedInput = inputString.split('\n').map(line => parseInt(line));
        setOutput(Problem1Solver.solve(parsedInput, 2020 /* TODO: Make this dynamic in the future */).toString());
    }, [inputString]);
    return <section className={styles.problem}>
        <h1>Problem #1</h1>
        <p>The problem:</p>
        <p>1.a: From the input provided in the file input1.txt, find the two numbers that sum to 2020 and provide the result of multiplying them together.</p>
        <label htmlFor="problem1Input">Input:</label>
        <textarea id="problem1Input" value={inputString} readOnly={true} />
        <label htmlFor="problem1Output">Output:</label>
        <textarea id="problem1Output" value={output} readOnly={true} />
    </section>;
}
