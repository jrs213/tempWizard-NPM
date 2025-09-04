const { c2f, f2c } = require('../index');

describe('c2f', () => {
  it('converts 0°C to 32°F', () => {
    expect(c2f(0)).toBe(32);
  });

  it('converts 100°C to 212°F', () => {
    expect(c2f(100)).toBe(212);
  });

  it('throws TypeError for non-number input', () => {
    expect(() => c2f('a')).toThrow(TypeError);
    expect(() => c2f(null)).toThrow(TypeError);
  });
});

describe('f2c', () => {
  it('converts 32°F to 0°C', () => {
    expect(f2c(32)).toBe(0);
  });

  it('converts 212°F to 100°C', () => {
    expect(f2c(212)).toBe(100);
  });

  it('throws TypeError for non-number input', () => {
    expect(() => f2c('a')).toThrow(TypeError);
    expect(() => f2c(undefined)).toThrow(TypeError);
  });
});