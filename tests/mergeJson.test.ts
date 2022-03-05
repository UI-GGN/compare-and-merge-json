import fse from 'fs-extra';
import { mergeJson } from '../src';

describe('merge json', () => {
  const testDataFolder = './tests/merge-data';
  const destinationFile = testDataFolder + '/destination.json';
  const missingDataFile = testDataFolder + '/missingData.json';
  const outputFile = testDataFolder + '/output.json';

  const destinationData = { key1: 'value1', key3: 'value3' };
  const missingData = { key2: 'value2' };
  const mergedData = { key1: 'value1', key3: 'value3', key2: 'value2' };

  beforeEach(() => {
    fse.outputJSONSync(destinationFile, destinationData);
    fse.outputJSONSync(missingDataFile, missingData);
  });

  afterEach(() => {
    fse.removeSync(testDataFolder);
  });

  it('should write merged source data and missing data into a file', () => {
    mergeJson({ destinationFile, missingDataFile, outputFile });

    expect(fse.readJSONSync(outputFile)).toEqual(mergedData);
  });
});
