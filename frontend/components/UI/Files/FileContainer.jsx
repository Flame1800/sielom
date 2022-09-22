import React from "react";
import styled from "styled-components";
import FileHolder from "./FileHolder";

const FileContainer = ({ files, title }) => {
  if (!files?.data) {
    return null;
  }

  return (
    <Wrapper>
      <div className="title-files">{title || "Документы"}</div>
      <div className="files">
        {files.data.map((file) => {
          return <FileHolder file={file.attributes} key={file.id} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 80px;

  .title-files {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;

export default FileContainer;
