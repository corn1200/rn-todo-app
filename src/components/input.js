import styled from "styled-components/native";
import { Dimensions, useWindowDimensions } from "react-native";
import PropTypes from 'prop-types';

// 할일 입력을 위한 인풋 컴포넌트(StyledInput) 생성(styled.TextInput)
// 인풋 컴포넌트는 화면의 크기(${({width})) 보다 40px 작은 넓이(=> width - 40}px)를 가진다
const StyledInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.main
}))`
    width: ${({ width }) => width - 40}px;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 25px;
    background-color: ${({ theme }) => theme.itemBackground};
    color: ${({ theme }) => theme.text};
`;

// 할일 입력 컴포넌트(StyledInput)를 반환(return)하는 함수 컴포넌트 생성(Input)
// 현재 기기의 넓이 값(useWindowDimensions().width)을 props로 넘겨준다
// 입력 최대 길이(maxLength)와 자동 대문자 입력(autoCapitalize) 방지
// 자동 문법(autoCorrect) 방지, 타이핑 키 타입(returnKeyType)을 설정
// props로 넘어온 포커스 상실 이벤트를 스타일 컴포넌트에 적용한다
const Input = ({ placeholder, value, onChangeText, onSubmitEditing, onBlur }) => {
    const width = useWindowDimensions().width;
    return <StyledInput
        width={width}
        placeholder={placeholder}
        maxLength={50}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
        keyboardAppearance="dark"
        // 인풋 컴포넌트가 렌더링 될 때 props 값으로 
        // 인풋 안의 값과 변경 이벤트 설정
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onBlur={onBlur}
    />;
};

// props로 넘어와야 하는 타입과 필수 값 여부 설정
Input.PropTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
}

// 스타일 정의 컴포넌트를 모듈로 사용할 수 있도록 설정
export default Input;