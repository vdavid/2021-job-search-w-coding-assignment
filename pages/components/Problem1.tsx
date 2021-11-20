import styles from '../../styles/Home.module.css';
import {useEffect, useState} from 'react';
import Problem1Solver from '../services/Problem1Solver';

export default function Problem1({inputString}: {inputString: string}) {
    const target = 2020;
    const [outputA, setOutputA] = useState<string>();
    const [outputB, setOutputB] = useState<string>();
    useEffect(() => {
        let parsedInput = inputString.split('\n').map(line => parseInt(line));
        const resultA = Problem1Solver.solveTwoSum(parsedInput, target);
        const resultB = Problem1Solver.solveThreeSum(parsedInput, target);
        setOutputA(resultA ? `${resultA.reduce((result, number) => result * number, 1)} (${resultA[0]} * ${resultA[1]})` : 'No solution found');
        setOutputB(resultB ? `${resultB.reduce((result, number) => result * number, 1)} (${resultB[0]} * ${resultB[1]} * ${resultB[2]})` : 'No solution found');
    }, [inputString]);
    return <section className={styles.problem}>
        <h1>Problem #1</h1>
        <p><strong>Input numbers:</strong> {inputString.trim().replaceAll('\n', ', ')}</p>
        <p><strong>Target:</strong> {target}</p>

        <h2>1.a</h2>
        <p><strong>Problem:</strong> From the input provided in the file input1.txt, find the two numbers that sum to 2020 and provide the result of multiplying them together.</p>
        <p><strong>Output:</strong> {outputA} (calculated here on the front end)</p>
        <h2>1.b</h2>
        <p><strong>Problem:</strong> Now find the three numbers in the input set that sum to 2020.</p>
        <p><strong>Output:</strong> {outputB} (calculated here on the front end)</p>
    </section>;
}
