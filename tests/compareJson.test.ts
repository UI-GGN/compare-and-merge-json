import fse from 'fs-extra';
import { compareJson } from '../src';

describe('compare json', () => {
  const testDataFolder = './tests/compare-data';
  const sourceFile = testDataFolder + '/source.json';
  const destinationFile = testDataFolder + '/destination.json';
  const missingDataFile = testDataFolder + '/missingData.json';

  const sourceData = { key1: 'value1', key2: 'value2' };
  const destinationData = { key1: 'value1', key3: 'value3' };
  const missingData = { key2: 'value2' };

  beforeEach(() => {
    fse.outputJSONSync(sourceFile, sourceData);
    fse.outputJSONSync(destinationFile, destinationData);
  });

  afterEach(() => {
    fse.removeSync(testDataFolder);
  });

  it('should write missing source data from destination data into a file', () => {
    compareJson({ sourceFile, destinationFile, missingDataFile });

    expect(fse.readJSONSync(missingDataFile)).toEqual(missingData);
  });
});
