import styled from "styled-components/native";
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import { icons } from "../icons";

// 할일 아이템을 감싸는 컴포넌트
const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.itemBackground};
    border-radius: 10px;
    padding: 5px;
    margin: 3px 0;
`;

// 아이콘 크기를 제하고 남은 공간을 모두 차지한다
const Contents = styled.Text`
    flex: 1;
    font-size: 24px;
    color: ${({ theme }) => theme.text};
`;

// 할일 컴포넌트를 생성, 체크 아이콘과 수정, 삭제 아이콘을 추가한다
const Task = ({ text }) => {
    return (
        <Container>
            <IconButton icon={icons.uncheck} />
            <Contents>{text}</Contents>
            <IconButton icon={icons.edit} />
            <IconButton icon={icons.delete} />
        </Container>
    );
};

// 할일 내용은 문자열 타입이고 필수로 받도록 설정
Task.propTypes = {
    text: PropTypes.string.isRequired
};

export default Task;