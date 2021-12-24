import styled from "styled-components/native";

// 할일 입력을 위한 인풋 컴포넌트(StyledInput) 생성(styled.TextInput)
const StyledInput = styled.TextInput`
    width: 100%;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 25px;
    background-color: ${({ theme }) => theme.itemBackground};
    color: ${({ theme }) => theme.text};
`;

// 할일 입력 컴포넌트(StyledInput)를 반환(return)하는 함수 컴포넌트 생성(Input)
const Input = () => {
    return <StyledInput />
};

// 스타일 정의 컴포넌트를 모듈로 사용할 수 있도록 설정
export default Input;