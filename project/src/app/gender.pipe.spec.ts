import { GenderPipe } from './gender.pipe';

describe('GenderPipe', () => {
  const pipe = new GenderPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('converts F to Female', () => {
    expect(pipe.transform('F')).toBe('Female');
  });

  it('converts M to Male', () => {
    expect(pipe.transform('M')).toBe('Male');
  });

  it('converts X to Unknown', () => {
    expect(pipe.transform('X')).toBe('Other');
  });
});
