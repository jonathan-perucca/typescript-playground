import {FizzBuzz} from '../../app/FizzBuzz';

describe('fizz buzz test', function() {

    let fizzBuzz = new FizzBuzz();

    it('should say 1 on 1', () => {
        expect(fizzBuzz.play(1)).toBe('1')
    });

    it('should say fizz on 3 multiplier', () => {
        expect(fizzBuzz.play(3)).toBe("fizz")
    });

    it('should say buzz on 5 multiplier', () => {
        expect(fizzBuzz.play(5)).toBe("buzz")
    });

    it('should say fizzbuzz on 15 multiplier', () => {
        expect(fizzBuzz.play(15)).toBe("fizzbuzz")
    });

    it('should play fizzbuzz game', () => {
        expect(fizzBuzz.playAll([1, 3, 5, 15, 9, 10, 2]))
            .toBe("1 fizz buzz fizzbuzz fizz buzz 2")
    });
});