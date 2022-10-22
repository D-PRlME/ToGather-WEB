import React from "react";
import type { NextPage } from "next";
import { LogInHeaderText } from "../login/style";
import { IoIosArrowBack } from "react-icons/io";
import {
  UserEditInput,
  UserEditBio,
  PrimaryButton,
  DeleteButton,
  UserInputContainer,
  UserButtonContainer,
  SaveButton,
  UserImageContainer,
} from "./edit.style";
import Image from "next/image";
import UserProfileImage from "../../assets/img/user/profile.png";

const Edit: NextPage = () => {
  return (
    <main>
      <LogInHeaderText>
        <IoIosArrowBack size="22px" />
        돌아가기
      </LogInHeaderText>

      <UserImageContainer>
        <Image alt={""} src={UserProfileImage} />
        <PrimaryButton as={`label`} htmlFor={``}>
          이미지 변경
        </PrimaryButton>
      </UserImageContainer>

      <UserInputContainer>
        <UserEditInput type="text" />
        <UserEditInput type="text" placeholder={`yeemail666@dsm.hs.kr`} />
        <UserEditInput type="text" />
        <UserEditBio />
      </UserInputContainer>
      <UserButtonContainer>
        <SaveButton>저장</SaveButton>
        <DeleteButton>계정 삭제</DeleteButton>
      </UserButtonContainer>
    </main>
  );
};

export default Edit;
