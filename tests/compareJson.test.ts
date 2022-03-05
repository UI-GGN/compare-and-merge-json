import fse from 'fs-extra';
import { compareJson } from '../src';

describe('compare json', () => {
  const testInputFolder = './tests/compare-input-data';
  const testOutputFolder = './tests/compare-output-data';

  const sourceFile = testInputFolder + '/source.json';
  const destinationFile = testInputFolder + '/destination.json';
  const missingDataFile = testOutputFolder + '/missingData.json';

  const sourceData = { key1: 'value1', key2: 'value2' };
  const destinationData = { key1: 'value1', key3: 'value3' };
  const missingData = { key2: 'value2' };

  beforeEach(() => {
    fse.outputJSONSync(sourceFile, sourceData);
    fse.outputJSONSync(destinationFile, destinationData);
  });

  afterEach(() => {
    fse.removeSync(testInputFolder);
    fse.removeSync(testOutputFolder);
  });

  it('should write missing source data from destination data into a file', () => {
    compareJson({ sourceFile, destinationFile, missingDataFile });

    expect(fse.readJSONSync(missingDataFile)).toEqual(missingData);
  });
});
