import styled from "styled-components";
import { palette } from "../../styles/palette";

export const UserEditInput = styled.input`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin: 8px auto;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  background-color: ${palette.gray["200"]};
  border: 0;
  border-radius: 0.3rem;
  font-weight: 600;
`;

export const UserInputContainer = styled.div``;

export const UserButtonContainer = styled.div``;

export const UserImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 95%;
  margin: 8px auto;
  label {
    margin: 8px 0;
    width: 5rem;
    text-align: center;
  }
  img {
    min-width: 100px !important;
    width: 100px !important;
    height: 100px !important;
  }
`;

export const UserEditBio = styled.textarea`
  display: flex;
  width: 95%;
  height: 120px;
  padding: 16px;
  margin: 8px auto;
  box-sizing: border-box;
  color: black;
  background-color: ${palette.gray["200"]};
  border: 0;
  border-radius: 0.3rem;
  font-weight: 600;
  resize: none;
`;

export const PrimaryButton = styled.button`
  background-color: ${palette.main};
  font-size: 20px;
  font-weight: 600;
  border: 0;
  border-radius: 888px;
  padding: 7px;
`;

export const SaveButton = styled(PrimaryButton)`
  position: absolute;
  left: 15px;
  bottom: 30px;
`;

export const DeleteButton = styled(PrimaryButton)`
  background-color: ${palette.gray["200"]};
  position: absolute;
  bottom: 30px;
  right: 15px;
`;
