export default class Problem1Solver {
    /* Got inspiration for an O(n) solution from LeetCode: https://leetcode.com/problems/two-sum/ */
    static solve(numbers: number[], target: number): number {
        /* Create map to search in O(1) time */
        const numberMap = new Map<number, number>();

        /* Loop through each number */
        for (let i = 0; i < numbers.length; i++) {
            // Find the difference between the target and number.
            const difference = target - numbers[i]

            /* Check numberMap for the difference. If it's already in the map, calculate and return the result. */
            if (numberMap.has(difference)) {
                return numbers[numberMap.get(difference) || 0] * numbers[i];
            }

            /* Store the number and its index in the map. */
            numberMap.set(numbers[i], i)
        }

        /* Return -1 if it found no solution. */
        return -1;
    }
}