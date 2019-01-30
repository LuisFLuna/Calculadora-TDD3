import { resta } from './resta';

describe('resta', () => {
  it('it should have 2 numbers', () => {
    expect(resta(1,1)).toBe(0);
  })
  it('it should rest 2 numbers', () => {
    expect(resta(2,1)).toBe(1);
  })
  it('it should rest a number with 0 correctly', () => {
    expect(resta(2,0)).toBe(2);
  })
  it('it should rest a number with 0 correctly', () => {
    expect(resta(0,2)).toBe(-2);
  })
  it('it should sum 2 negative numbers correctly', () => {
    expect(resta(-2,1)).toBe(-3);
  })
  it('it should change the (-) to (+) if the number is negative', () => {
    expect(resta(2,-1)).toBe(3);
  })
  it('it should rest the negative numbers', () => {
    expect(resta(-2,-1)).toBe(1);
  })
});
