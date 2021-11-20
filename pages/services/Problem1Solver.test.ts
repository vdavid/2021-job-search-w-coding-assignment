import Problem1Solver from './Problem1Solver';

test('Problem1Solver can solve a trivial problem', async () => {
    /* Assemble */
    const input=[1,2,3];

    /* Act */
    const output = Problem1Solver.solve(input, 3);

    /* Assert */
    expect(output).toBe(2);
});
