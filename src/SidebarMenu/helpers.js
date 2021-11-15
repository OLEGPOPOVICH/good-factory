import { Utils } from '../utils';

export const getFilename = (file) => {
  const filename = Utils.isString(file) ? file : file.name || file.indexFile;
  const defaultFilename = 'Файл';

  return Utils.startCase(filename) || defaultFilename;
}

export const getFolder = (sectionFolder, file) => {
  const folder = file.folder ? file.folder : sectionFolder;
  const defaultFolder = 'Папка';

  return folder || defaultFolder;
}

export const getSectionName = (section) => {
  const sectionName = section.name || section.folder;
  const defaultSectionName = 'Папка';

  return sectionName || defaultSectionName;
}

export const getNames = (sidebar) => {
  const names = {};

  function setName(section, file) {
    const folder = getFolder(section.folder, file);
    const filename = getFilename(file);

    names[`${folder}/${filename}`] = Utils.startCase(filename);

    Utils.isArray(file.files) && file.files.forEach(file => {
      setName(section, file);
    });
  }

  sidebar.forEach(section => {
    Utils.isArray(section.files) && section.files.forEach(file => {
      setName(section, file);
    });
  });

  return names;
}