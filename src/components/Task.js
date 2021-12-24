import styled from "styled-components/native";
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import { icons } from "../icons";
import { useState } from "react";
import Input from "./Input";

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
const Task = ({ item, deleteTask, toggleTask, updateTask }) => {
    // 현재 수정 중 여부를 결정하는 state와 수정 중인 텍스트를 저장하는 state를 생성한다
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);

    // 수정 후 완료 리퀘스트를 보내면
    // 수정 전 아이템을 복사하고 해당 아이템의 text를 수정한 state로 변환한다
    // 수정 중 상태를 false로 변경하고 updateTask에 아이템을 보내어 text를 수정한다
    const _onSubmit = () => {
        if (isEditing) {
            const updatedItem = Object.assign({}, item);
            updatedItem['text'] = text;
            setIsEditing(false);
            updateTask(updatedItem);
        }
    }

    // 만약 현재 수정 state가 true이면 인풋 컴포넌트를 출력하고
    // 수정 중이 아니라면 할일 목록 컴포넌트를 출력한다 
    return isEditing ? (
        <Input
            // 입력 테스트가 변경 될 때 마다 입력 중인 데이터를 state에 저장
            // 인풋 포커스를 잃을 시 수정 전 텍스트로 되돌리고 수정 state를 false로 전환한다
            value={text}
            onChangeText={text => setText(text)}
            onSubmitEditing={_onSubmit}
            onBlur={() => {
                setText(item.text); 
                setIsEditing(false);
            }}
        />
    ) : (
        <Container>
            <IconButton
                icon={item.completed ? icons.check : icons.uncheck}
                item={item}
                onPress={toggleTask} />
            <Contents completed={item.completed}>{item.text}</Contents>
            {item.completed || <IconButton icon={icons.edit} onPress={() => setIsEditing(true)} />}
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
    item: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired
};

export default Task;