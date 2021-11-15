import React from 'react';
import styled from 'styled-components';
import { FileItem } from './FileItem';

const Collapse = styled.div`
  display: none;
  background-color: #f1f1f1;
`

export const FileList = ({
  files,
  sectionFolder,
  isSectionActive,
  labels,
  getName
}) => {
  if (!files.length) {
    return null
  }

  return (
    <Collapse data-open={Boolean(isSectionActive)}>
      {files.map((file, fileIndex) => {
        return (
          <FileItem
            key={`file-${fileIndex}`}
            file={file}
            sectionFolder={sectionFolder}
            isSectionActive={isSectionActive}
            labels={labels}
            getName={getName}
          />
        )
      })}
    </Collapse>
  )
};