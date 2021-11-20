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
        <pre>Problem 1
            1.a
            From the input provided in the file input1.txt, find the two numbers that sum to 2020 and provide the result of multiplying them together.

            e.g. For the list below, the two numbers are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

            1721
            979
            366
            299
            675
            1456

            Answer:

            1.b

            Now find the three numbers in the input set that sum to 2020. Using the example above again, the three numbers that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

            Answer:
        </pre>
        <label htmlFor="problem1Input">Input:</label>
        <textarea id="problem1Input" value={inputString} readOnly={true} />
        <label htmlFor="problem1Output">Output:</label>
        <textarea id="problem1Output" value={output} readOnly={true} />
    </section>;
}
