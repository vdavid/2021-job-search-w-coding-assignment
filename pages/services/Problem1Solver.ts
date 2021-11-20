export default class Problem1Solver {
    /* Got inspiration for an O(n) solution from LeetCode: https://leetcode.com/problems/two-sum/ */
    static solveTwoSum(numbers: number[], target: number): [number, number] | undefined {
        /* Create map to search in O(1) time */
        const numberMap = new Map<number, number>();

        /* Loop through each number */
        for (let i = 0; i < numbers.length; i++) {
            // Find the difference between the target and number.
            const difference = target - numbers[i];

            /* Check numberMap for the difference. If it's already in the map, calculate and return the result. */
            if (numberMap.has(difference)) {
                return [numbers[numberMap.get(difference) || 0], numbers[i]];
            }

            /* Store the number and its index in the map. */
            numberMap.set(numbers[i], i);
        }

        /* Found no solution → Returns undefined. */
    }

    static solveThreeSum(numbers: number[], target: number): [number, number, number] | undefined {
        if (numbers.length >= 3) {
            /* Sort numbers ascending */
            numbers = numbers.sort((a, b) => a - b);

            /* `i` is the index of the left element, `j` is of the middle one, `k` is of the one at the right.
            * `i` starts at the beginning, `k` starts at the end, `j` races in between the two. */
            for (let i = 0; i < numbers.length - 2; i++) {
                /* If the current number is larger than our target then there'll be no solution. */
                if (numbers[i] > target) {
                    break;
                }

                // Set up `j` and `k` to the ends of the range.
                let j = i + 1;
                let k = numbers.length - 1;
                while (j < k) {
                    const sum = numbers[i] + numbers[j] + numbers[k];

                    if (sum === target) { /* Found it! */
                        return [numbers[i], numbers[j], numbers[k]];
                    } else if (sum < target) { /* Sum is too small, increment `j` */
                        j++;
                    } else { /* Sum is too large, decrement `k` */
                        k--;
                    }
                }
            }
        }

        /* Found no solution → Returns undefined. */
    }
}