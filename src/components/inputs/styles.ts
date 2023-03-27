import styled from "styled-components";

export const CustomFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  margin: 0;
  padding: 0;

  width: 100%;
  max-width: 335px;

  legend {
    font-size: 14px;
    font-weight: 108%;
    color: #1a1a1a;
    margin-bottom: 6px;
  }
  label {
    font-size: 11px;
    font-weight: 110%;
    color: #707070;
    margin-top: 6px;
  }

  input {
    display: flex;
    box-sizing: border-box;
    padding: 20px 12px;

    width: 100%;
    height: 59px;

    background: #ffffff;
    border: 1px solid #b9bcc0;
    border-radius: 4px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 335px;

  i {
    position: absolute;
    right: 25px;
    top: 46px;
  }
`;

export const SelectOptionList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;

  padding: 0px;
  margin: 0;
  list-style: none;

  background: #ffffff;
  border: 1px solid #d9d9d6;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  li {
    cursor: pointer;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 20px 12px;

    color: #1a1a1a;
    font-size: 16px;
    font-weight: 102%;
  }
`;
