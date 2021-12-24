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
const Task = ({ item, deleteTask }) => {
    return (
        <Container>
            <IconButton icon={icons.uncheck} />
            <Contents>{item.text}</Contents>
            <IconButton icon={icons.edit} />
            {/* 현재 할일의 id 값과 온 프레스 이벤트를 넘긴다 */}
            <IconButton
                icon={icons.delete}
                id={item.id}
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
    deleteTask: PropTypes.func.isRequired
};

export default Task;