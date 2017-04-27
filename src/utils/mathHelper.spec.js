import MathHelper from './mathHelper';

describe('Math Helper', () => {
  describe('add', () => {
    it('returns 12 when passed 5, 7', () => {
      expect(MathHelper.add(5, 7)).toEqual(12);
    });
  });
});
