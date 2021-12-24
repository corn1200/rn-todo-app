import styled from "styled-components/native";
import { Dimensions } from "react-native";

// 할일 입력을 위한 인풋 컴포넌트(StyledInput) 생성(styled.TextInput)
// 인풋 컴포넌트는 화면의 크기(${({width})) 보다 40px 작은 넓이(=> width - 40}px)를 가진다
const StyledInput = styled.TextInput`
    width: ${({width}) => width - 40}px;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 25px;
    background-color: ${({ theme }) => theme.itemBackground};
    color: ${({ theme }) => theme.text};
`;

// 할일 입력 컴포넌트(StyledInput)를 반환(return)하는 함수 컴포넌트 생성(Input)
// 현재 기기의 넓이 값(Dimensions.get('window').width)을 props로 넘겨준다 
const Input = () => {
    const width = Dimensions.get('window').width;
    return <StyledInput width={width}/>
};

// 스타일 정의 컴포넌트를 모듈로 사용할 수 있도록 설정
export default Input;