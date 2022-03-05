import fse from 'fs-extra';

export interface MergeJsonParams {
  destinationFile: string;
  missingDataFile: string;
  outputFile: string;
}

export const mergeJson = ({ destinationFile, missingDataFile, outputFile }: MergeJsonParams): void => {
  const destinationData = fse.readJSONSync(destinationFile);
  const missingData = fse.readJSONSync(missingDataFile);

  const mergedData = { ...destinationData, ...missingData };

  return fse.writeJsonSync(outputFile, mergedData);
};
