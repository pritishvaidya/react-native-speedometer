import calculateDegreeFromLabels from '../src/utils/calculate-degree-from-labels';
import calculateLabelFromValue from '../src/utils/calculate-label-from-value';
import limitValue from '../src/utils/limit-value';
import validateSize from '../src/utils/validate-size';

describe('Testing Utility functions', () => {
  describe('calculate-degree-from-labels utility method', () => {
    const degree = 180;
    const labels = [1, 2, 3, 4];
    it('should return  normalized degree', () => {
      expect(degree / (labels.length)).toBe(calculateDegreeFromLabels(degree, labels));
    });
  });

  describe('calculate-label-from-value utility method', () => {
    const value = 50;
    const labels = [1, 2, 3, 4];
    const maxValue = 100;
    const minValue = 0;
    it('should calculate label from value', () => {
      const currentValue = (value) / (maxValue - minValue);
      const currentIndex = Math.round((labels.length - 1) * currentValue);
      const label = labels[currentIndex];
      expect(label).toBe(calculateLabelFromValue(value, labels, minValue, maxValue));
    });
  });

  describe('limit-value utility method', () => {
    let value = null;
    const maxValue = 100;
    const minValue = 0;
    it('should check if value is a number', () => {
      value = NaN;
      expect(limitValue(value, minValue, maxValue)).toBe(0);
    });

    it('should limit value', () => {
      value = 50;
      expect(value).not.toBeNaN();
      expect(Math.min(
        Math.max(value, minValue), maxValue,
      )).toBe(limitValue(value, minValue, maxValue));
    });
  });

  describe('validate-size utility method', () => {
    let value = null;
    const original = 200;
    it('should check if size is a number', () => {
      value = NaN;
      expect(validateSize(value, original)).toBe(original);
    });

    it('should return current size value', () => {
      value = 50;
      expect(value).not.toBeNaN();
      expect(value).toBe(validateSize(value, original));
    });
  });
});
