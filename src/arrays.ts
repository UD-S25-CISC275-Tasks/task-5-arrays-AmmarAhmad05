/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num) => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num) => {
        const parsed = parseInt(num, 10);
        if (isNaN(parsed)) {
            return 0;
        }
        return parsed;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount) => {
        let value = amount;
        if (value[0] === "$") {
            value = value.slice(1);
        }

        let parsedNumber = parseInt(value, 10);
        if (isNaN(parsedNumber)) {
            return 0;
        }
        return parsedNumber;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((msg) => {
            return msg[msg.length - 1] !== "?";
        })
        .map((msg) => {
            if (msg[msg.length - 1] === "!") {
                return msg.toUpperCase();
            }
            return msg;
        });
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shortWords: number = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 4) {
            shortWords++;
        }
    }
    return shortWords;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    let isRGB: boolean = true;
    for (let i = 0; i < colors.length; i++) {
        if (
            colors[i] !== "red" &&
            colors[i] !== "blue" &&
            colors[i] !== "green"
        ) {
            isRGB = false;
        }
    }
    return isRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let sum: number = 0;
    for (let i = 0; i < addends.length; i++) {
        sum += addends[i];
    }

    let mathAnswer: string = `${sum}=`;
    for (let i = 0; i < addends.length; i++) {
        if (i < addends.length - 1) {
            mathAnswer += `${addends[i]}+`;
        } else {
            mathAnswer += `${addends[i]}`;
        }
    }

    return mathAnswer;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.length === 0) {
        return [0];
    }

    let posSum: number = 0;
    let index: number = 0;

    while (index < values.length && values[index] >= 0) {
        posSum += values[index];
        index++;
    }

    if (index === values.length) {
        return [...values, posSum];
    }

    return [...values.slice(0, index + 1), posSum, ...values.slice(index + 1)];
}
