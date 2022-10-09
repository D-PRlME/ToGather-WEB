import {
  LoginAlertText,
  LogInContainer,
  LogInHeader,
  LogInHeaderIn,
  LogInHeaderText,
  LoginInput,
  LoginSubmitButton,
  LogInText,
  LogInWrap,
} from "./style";
import { IoIosArrowBack } from "react-icons/io";

const LogIn = () => {
  return (
    <>
      <LogInContainer>
        <LogInHeader>
          <LogInHeaderIn>
            <LogInHeaderText>
              <IoIosArrowBack size="22px" />
              돌아가기
            </LogInHeaderText>
          </LogInHeaderIn>
        </LogInHeader>
        <LogInWrap>
          <LogInText>
            마음 맞는 팀원을 찾는
            <br /> 간단한 방법.
            <p>ToGather</p>
          </LogInText>
          <LoginInput placeholder="이메일" />
          <LoginInput placeholder="비밀번호"></LoginInput>
          <LoginSubmitButton>로그인</LoginSubmitButton>
          <LoginAlertText>
            <strong>비밀번호 변경</strong>
          </LoginAlertText>
        </LogInWrap>
      </LogInContainer>
    </>
  );
};

export default LogIn;
