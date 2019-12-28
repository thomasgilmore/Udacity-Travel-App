import { departingDate } from './app';

test('If departing date is a date', () => {
    expect(departingDate('12/12/2020', Date.now())).toBe(true);
  });