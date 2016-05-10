export class FizzBuzz {

    play(number: number) : string {
        return (number % 15 == 0) ? "fizzbuzz" :
               (number % 3 == 0) ? "fizz" :
               (number % 5 == 0) ? "buzz"
               : number.toString();
    }

    playAll(numbers: Array<number>) : string {
        return numbers
            .map(number => this.play(number))
            .join(' ');
    }
}