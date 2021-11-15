import React, { Fragment } from 'react';
import styled from 'styled-components';
import { getFilename, getFolder } from './helpers';
import { FileList } from './FileList';

const Collapse = styled.div``

export const FileItem = ({
  file,
  sectionFolder,
  isSectionActive,
  labels,
  getName
}) => {
  const subgroup = file.files || null;
  const folder = getFolder(sectionFolder, file);
  const filename = getFilename(file);
  const subsectionNameOrFilename = getName(labels, folder, filename, file.indexFile)

  return (
    <Fragment>
      <div>{subsectionNameOrFilename}</div>
      {subgroup && (
        <Collapse
          data-flag={'first'}
          data-open={Boolean(isSectionActive)}
        >
          <FileList
            files={subgroup}
            sectionFolder={folder}
            isSectionActive={isSectionActive}
            labels={labels}
            getName={getName}
          />
        </Collapse>
      )}
    </Fragment>
  )
};