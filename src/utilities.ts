export interface JsonData {
  [key: string]: any;
}

export const getMissingData = (sourceData: JsonData, destinationData: JsonData): JsonData => {
  const destinationDataKeys = Object.keys(destinationData);

  const missingKeyValues = Object.entries(sourceData).filter(([key]) => !destinationDataKeys.includes(key));

  return Object.fromEntries(missingKeyValues);
};
