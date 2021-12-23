import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background};
    align-items: center;
    justify-content: center;
`;

export default function App() {
    console.log("all right")
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Text>TODO</Text>
                <StatusBar style="auto" />
            </Container>
        </ThemeProvider>
    );
}
