import { getMissingData } from '../src';

describe('utilities', () => {
  const sourceJson = { key1: 'value1', key2: 'value2' };
  const destinationJson = { key1: 'value1', key3: 'value3' };

  describe('getMissingData', () => {
    it('should return missing source key and values in destination json data', () => {
      const expectedMissingData = { key2: 'value2' };

      const missingData = getMissingData(sourceJson, destinationJson);

      expect(missingData).toEqual(expectedMissingData);
    });
  });
});
