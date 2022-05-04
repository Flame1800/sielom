import React from 'react';
import styled from "styled-components";
import {baseTheme} from "../../../styles/theme";
import {API} from "../../../libs/API";

const FileHolder = ({file}) => {
    console.log(API.siteUrl)
    return (
        <Wrapper download target="_blank" href={API.url + file.url}>
            <img src="/img/file-icon.svg" alt="file-icon"/>
            <p>{file.name}</p>
        </Wrapper>
    );
};

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  margin: 20px 0;
  font-weight: 500;
  font-size: 16px;
  color: ${baseTheme.colors.blue};
  max-width: 800px;

  &:hover {
    text-decoration: underline;
  }
  
  img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
`

export default FileHolder;