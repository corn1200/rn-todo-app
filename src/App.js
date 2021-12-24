// 스타일 컴포넌트 생성(styled)과 
// 테마 설정을 위한 컴포넌트(ThemeProvider)를 import
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Input from './components/Input';
import { useState } from "react";
import Task from './components/Task';

// 내용을 감싸기 위한(Container) 스타일 컴포넌트 생성(styled.View)
// props로 받은 테마 값(${({ theme }))의 
// 배경 색상으로 Container 색상 설정(=> theme.background})
const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    justify-content: flex-start;
`;

// 제목을 보여주기 위한(Title) 스타일 컴포넌트 생성(styled.Text)
// props로 받은 테마 값(${({ theme }))의
// 메인 색상(=> theme.main})으로 텍스트 색상(color:) 설정
const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme }) => theme.main};
    width: 100%;
    align-items: flex-end;
    padding: 0 20px;
`;

// 할일들을 담아둘 할일 목록 컴포넌트 생성
const List = styled.ScrollView`
    flex: 1;
    width: ${({ width }) => width - 40}px;
`;

// 앱을 렌더링(return) 할 때 테마 파일(./theme.js)의
// 테마 오브젝트 값을 props로 받는다(theme={theme})
// 렌더링할 때 테마 적용 컴포넌트(ThemeProvider)에 있는
// 다른 컴포넌트(Container, Title 등)에서 값을 사용할 수 있다
export default function App() {
    console.log("all right");
    const width = Dimensions.get('window').width;

    // 할일 목록 임시 데이터
    const tempData = {
        1: { id: '1', text: 'react native', completed: false },
        2: { id: '2', text: 'expo', completed: true },
        3: { id: '3', text: 'js', completed: false }
    };

    // 실제 할일 목록을 저장하는 state, 임시 데이터로 초기화
    const [tasks, setTasks] = useState(tempData);

    // 입력 데이터를 저장하는 state
    const [newTask, setNewTask] = useState('');

    // 만약 입력값이 없으면 추가하지 않고 반환한다
    // 현재 시간으로 ID값을 만들고 입력 값 state와 함께 저장한다
    // 할일 목록 state에 기존 state와 함께 추가
    const addTask = () => {
        if (newTask.length < 1) {
            return;
        }
        const ID = Date.now().toString();
        const newTaskObject = {
            [ID]: { id: ID, text: newTask, completed: false },
        };
        setNewTask('');
        setTasks({ ...tasks, ...newTaskObject });
    };

    // 현재 할일 목록 state를 복사하고
    // id 에 해당하는 할일을 삭제한다
    // 할일 state를 할일이 삭제된 state로 교체한다
    const deleteTask = (id) => {
        const currentTasks = Object.assign({}, tasks);
        delete currentTasks[id];
        setTasks(currentTasks);
    };

    // 현재 할일 state를 복사하고
    // id 에 해당하는 할일 완료 여부를 반전 시킨다
    // 수정 된 state를 저장
    const toggleTask = (id) => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        setTasks(currentTasks);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar
                    style="light-content"
                    backgroundColor={theme.background}
                />
                <Title>TODO List</Title>
                {/* 인풋 컴포넌트에 입력하는 동시에 state에 저장하고 다시 인풋에 보여준다 */}
                <Input
                    placeholder="+ Add a Task"
                    value={newTask}
                    onChangeText={text => setNewTask(text)}
                    onSubmitEditing={addTask}
                />
                {/* props로 현재 기기의 넓이를 받고 할일 
                아이템들을 스크롤할 수 있는 목록으로 정리
                tasks 할일 목록 state에서 거꾸로 출력하며 할일 목록을 보여준다 */}
                <List width={width}>
                    {Object.values(tasks)
                        .reverse()
                        .map(item => (
                            // 할일 state의 값 전체와 삭제 함수를 넘겨준다
                            // 토글 함수를 넘겨준다
                            <Task
                                key={item.id}
                                item={item}
                                deleteTask={deleteTask}
                                toggleTask={toggleTask}
                            />
                        ))
                    }
                </List>
            </Container>
        </ThemeProvider>
    );
}
