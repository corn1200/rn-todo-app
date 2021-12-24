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
// 할일 완료 여부에 따라 텍스트 색상과 줄긋기 여부를 정한다
const Contents = styled.Text`
    flex: 1;
    font-size: 24px;
    color: ${({ theme, completed }) => completed ? theme.done : theme.text};
    text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
`;

// 할일 컴포넌트를 생성, 체크 아이콘과 수정, 삭제 아이콘을 추가한다
// 완료 여부(item.completed)에 따라 렌더링할 아이콘(icons.check : icons.uncheck)을 정한다
// 만약 할일이 완료 상태이면 수정 아이콘을 렌더링하지 않는다
const Task = ({ item, deleteTask, toggleTask }) => {
    return (
        <Container>
            <IconButton
                icon={item.completed ? icons.check : icons.uncheck}
                item={item}
                onPress={toggleTask} />
            <Contents completed={item.completed}>{item.text}</Contents>
            {item.completed || <IconButton icon={icons.edit} />}
            {/* 현재 할일의 id 값과 온 프레스 이벤트를 넘긴다 */}
            <IconButton
                icon={icons.delete}
                item={item}
                onPress={deleteTask}
            />
        </Container>
    );
};

// 할일 내용은 아이템 자체를 넘기기 때문에
// 오브젝트 타입이고 필수로 받도록 설정
// 온 프레스 이벤트의 타입과 필수 전달 여부 설정
Task.propTypes = {
    text: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired
};

export default Task;