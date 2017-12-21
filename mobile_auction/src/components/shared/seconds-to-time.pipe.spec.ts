import { SecondsToTimePipe } from './seconds-to-time.pipe';

describe('SecondsToTimePipe pipe', () => {
    let pipe: SecondsToTimePipe;

    beforeEach(() => {
        pipe = new SecondsToTimePipe();
    });

    it('Should convert integer to time format', () => {
        expect(pipe.transform(55)).toEqual('00:00:55');
        expect(pipe.transform(85)).toEqual('00:01:25');
    })
})