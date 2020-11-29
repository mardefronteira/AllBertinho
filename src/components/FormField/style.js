import styled, { css } from 'styled-components';

export const Warning = styled.div`
  color:red;
  padding-left: 10px;
  font-size: 13px;
  display: inline;
  position: relative;
  right: 0;
  top: 70px;
`;

export const FormFieldWrapper = styled.div`
  position: relative;
  width: 70vw;
`;

export const LabelText=styled.span`
  color: #000;
  height: 50px;
  position: absolute;

  top: 8px;
  left: 16px;

  align-items: center;
  font-size: 18px;
  transition: .1s ease-in-out;
`;

export const Input = styled.input`
  background: #EEE;
  color: #222;

  display: block;
  width: 70vw;
  max-width: 800px;
  height: 50px;
  font-size: 18px;

  outline:0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #EEE;

  padding: 16px 16px;
  margin-bottom: 25px;
  resize: none;
  border-radius: 2px;

  transition: border-color .3s;

  &:focus {
    border-bottom-color: #999;
  }

  /* &:focus + span {
    transform: scale(.6) translateY(-10px);
  }

  ${({ hasvalue }) => {

    return hasvalue && css`
      &:not([type="color"]) + span {
        transform: scale(.6) translateY(-10px);
      }
  `;
  }} */
`;
