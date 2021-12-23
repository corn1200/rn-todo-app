import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export default function App() {
    console.log("all right")
    return (
        <Container>
            <Text>TODO</Text>
            <StatusBar style="auto" />
        </Container>
    );
}
