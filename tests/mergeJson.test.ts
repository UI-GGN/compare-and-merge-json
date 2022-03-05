import fse from 'fs-extra';
import { mergeJson } from '../src';

describe('merge json', () => {
  const testInputFolder = './tests/merge-input-data';
  const testOutputFolder = './tests/merge-output-data';
  const destinationFile = testInputFolder + '/destination.json';
  const missingDataFile = testInputFolder + '/missingData.json';
  const outputFile = testOutputFolder + '/output.json';

  const destinationData = { key1: 'value1', key3: 'value3' };
  const missingData = { key2: 'value2' };
  const mergedData = { key1: 'value1', key3: 'value3', key2: 'value2' };

  beforeEach(() => {
    fse.outputJSONSync(destinationFile, destinationData);
    fse.outputJSONSync(missingDataFile, missingData);
  });

  afterEach(() => {
    fse.removeSync(testInputFolder);
    fse.removeSync(testOutputFolder);
  });

  it('should write merged source data and missing data into a file', () => {
    mergeJson({ destinationFile, missingDataFile, outputFile });

    expect(fse.readJSONSync(outputFile)).toEqual(mergedData);
  });
});
