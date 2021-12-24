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
    const [newTask, setNewTask] = useState('');
    // 입력을 완료하면 인풋 컴포넌트의 내용을 지우고 해당 내용으로 얼럿을 띄운다
    const addTask = () => {
        alert(newTask);
        setNewTask('');
    }
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
                아이템들을 스크롤할 수 있는 목록으로 정리 */}
                <List width={width}>
                    <Task text='React Native' />
                    <Task text='Expo' />
                    <Task text='JS' />
                    <Task text='React Native' />
                    <Task text='React Native' />
                    <Task text='React Native' />
                    <Task text='React Native' />
                    <Task text='React Native' />
                    <Task text='React Native' />
                    <Task text='React Native' />
                    <Task text='React Native' />
                    <Task text='React Native' />
                    <Task text='React Native' />
                    <Task text='React Native' />
                </List>
            </Container>
        </ThemeProvider>
    );
}
