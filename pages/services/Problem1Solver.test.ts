import Problem1Solver from './Problem1Solver';

test('Problem1Solver can solve a trivial problem', async () => {
    /* Assemble */
    const input = [1, 2, 3];

    /* Act */
    const output = Problem1Solver.solve(input, 3);

    /* Assert */
    expect(output).toBe(2);
});


test('Problem1Solver can solve the sample problem', async () => {
    /* Assemble */
    const input = [1721, 979, 366, 299, 675, 1456];
    const expectedResult = 514579;

    /* Act */
    const output = Problem1Solver.solve(input, 2020);

    /* Assert */
    expect(output).toBe(expectedResult);
});
