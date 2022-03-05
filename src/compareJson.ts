import fse from 'fs-extra';
import { getMissingData } from './utilities';

export interface CompareJsonParams {
  sourceFile: string;
  destinationFile: string;
  missingDataFile: string;
}

export const compareJson = ({ sourceFile, destinationFile, missingDataFile }: CompareJsonParams): void => {
  const sourceData = fse.readJSONSync(sourceFile);
  const destinationData = fse.readJSONSync(destinationFile);

  const missingData = getMissingData(sourceData, destinationData);

  fse.writeJsonSync(missingDataFile, missingData);
};
