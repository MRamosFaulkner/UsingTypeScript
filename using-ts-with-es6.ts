const numbers1: number[] = [1, 2, 3, 4, 5];
const numbers2: number[] = [6, 7, 8, 9];

const numbers: number[] = [...numbers1, ...numbers2];

const squared = (n: number): number => n * n;

const squares: number[] = numbers.map(squared);

const isEven = (n: number): boolean => {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

const evenSquares: number[] = squares.filter((n: number) => isEven(n));
const firstEvenSquare: number = evenSquares[0];
const secondEvenSquare: number = evenSquares[1];

console.log(`Numbers: ${numbers}\n Squares: ${squares}\n Even Squares: ${evenSquares}\n Extracted Numbers: ${firstEvenSquare},${secondEvenSquare}`);
