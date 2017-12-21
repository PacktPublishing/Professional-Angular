import { ReversePipe } from './reverse.pipe';

describe('ReversePipe pipe', () => {
    let pipe: ReversePipe;

    beforeEach(() => {
        pipe = new ReversePipe();
    })

    it('Should return an array sorted in reverse order', () => {
        expect(pipe.transform([1, 2, 3])).toEqual([3, 2, 1]);
        expect(pipe.transform(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
        expect(pipe.transform(
            [
                {name: 'David', gender: 'm'},
                {name: 'Alex', gender: 'f'},
                {name: 'Fred', gender: 'm'},
                {name: 'Joice', gender: 'f'}
            ]
        )).toEqual(
            [
                {name: 'Joice', gender: 'f'},
                {name: 'Fred', gender: 'm'},
                {name: 'Alex', gender: 'f'},
                {name: 'David', gender: 'm'}
        ]);
    });
})