import Problem1Solver from './Problem1Solver';

test('Problem1Solver can solve a trivial two-sum problem', async () => {
    /* Assemble */
    const input = [1, 2, 3];

    /* Act */
    const output = Problem1Solver.solveTwoSum(input, 3);

    /* Assert */
    expect(output![0] * output![1]).toBe(2);
});


test('Problem1Solver can solve the sample two-sum problem', async () => {
    /* Assemble */
    const input = [1721, 979, 366, 299, 675, 1456];
    const expectedResult = [1721, 299];

    /* Act */
    const output = Problem1Solver.solveTwoSum(input, 2020);

    /* Assert */
    expect(output).not.toBe(undefined);
    expect(output![0]).toBe(expectedResult[0]);
    expect(output![1]).toBe(expectedResult[1]);
});

test('Problem1Solver can solve a trivial three-sum problem', async () => {
    /* Assemble */
    const input = [1, 2, 3];

    /* Act */
    const output = Problem1Solver.solveThreeSum(input, 6);

    /* Assert */
    expect(output![0] * output![1] * output![2]).toBe(6);
});

test('Problem1Solver can solve the sample three-sum problem', async () => {
    /* Assemble */
    const input = [1721, 979, 366, 299, 675, 1456];
    const expectedResult = [366, 675, 979];

    /* Act */
    const output = Problem1Solver.solveThreeSum(input, 2020);

    /* Assert */
    expect(output).not.toBe(undefined);
    expect(output![0]).toBe(expectedResult[0]);
    expect(output![1]).toBe(expectedResult[1]);
    expect(output![2]).toBe(expectedResult[2]);
});
