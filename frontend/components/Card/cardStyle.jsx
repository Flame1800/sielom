import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 15px;
  max-width: 300px;
  min-width: 220px;
  width: 100%;

  img {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
`

export const CardCover = styled.div`
  background: url(${({cover}) => cover});
  background-size: cover;
  width: 100%;
  height: 240px;
  border-radius: 16px;
  border: 1px solid #B1B1B1;
  margin-bottom: 25px;
`

export const CardCategoryName = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 13px;
  text-transform: uppercase;
  color: #9D9D9D;
`

export const CardTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  min-height: 70px;
  color: #3E3E3E;
`

export const CardParamsBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 530px;
  width: 100%;
  margin-top: 20px;
`

export const CardParameterWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 10px;
  color: #3E3E3E;
`