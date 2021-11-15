/* eslint-disable import/no-anonymous-default-export */
export default [
  {
    name: 'Section 1',
    labels: {
      'indexFile 1': 'label indexFile 1',
      'indexFile 2': 'label indexFile 2'
    },
    files: [
      {
        name: 'имя файла 1',
        indexFile: 'indexFile 1',
        folder: 'Папка 1',
        files: [
          {
            name: 'имя файла 1 - inner',
            indexFile: 'indexFile 1 - inner',
            folder: 'Папка 1',
          },
          {
            name: 'имя файла 2 - inner',
            indexFile: 'indexFile 2 - inner',
            folder: 'Папка 1',
          },
          'строковый файл 3 - inner'
        ],
      },
      {
        name: 'имя файла 2',
        indexFile: 'indexFile 2',
        folder: 'Папка 1',
      },
      'строковый файл 3'
    ],
    folder: 'Папка 1',
  },
  {
    name: 'Section 2',
    label: null,
    files: [
      {
        name: 'имя файла 11',
        indexFile: 'indexFile 11',
        folder: 'Папка 22',
      },
      'строковый файл 22'
    ],
    folder: 'Папка 22',
  },
  {
    name: 'Section 3',
    label: null,
    files: [
      {
        name: 'имя файла 12',
        indexFile: 'indexFile 12',
        folder: 'Папка 3',
      },
      'строковый файл 12'
    ],
    folder: 'Папка 3',
  }
];