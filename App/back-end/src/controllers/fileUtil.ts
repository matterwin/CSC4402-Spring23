import fs from 'fs-extra';

export const attemptFolderDelete = async (file: any): Promise<void> => {
  try {
    if (file?.destination !== undefined) {
      await fs.remove(file.destination);
    }
  } catch (error) {
    console.error(error);
  }
};
