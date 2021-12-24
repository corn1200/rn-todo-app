import styled from "styled-components/native";
import { TouchableOpacity, View } from "react-native";
import PropTypes from 'prop-types';
import { icons } from "../icons";

// 아이콘이라는 스타일 컴포넌트를 생성
const Icon = styled.Image`
    width: 30px;
    height: 30px;
    margin: 10px;
    tint-color: ${({ theme, completed }) => completed ? theme.done : theme.text};
`;

// props로 받은 아이콘과 온 프레스 이벤트를 속성에 포함
const IconButton = ({ icon, onPress, item }) => {
    // 파라미터에 값을 넣어야 하기 때문에 props를 가공함
    const _onPress = () => {
        onPress(item.id);
    };

    return (
        <TouchableOpacity onPress={_onPress}>
            <View>
                <Icon source={icon} completed={item.completed} />
            </View>
        </TouchableOpacity>
    );
};

// 아이콘 버튼의 아이템 기본 속성을 정의한다
IconButton.defaultProps = {
    item: { completed: false }
};

// 아이콘의 값을 아이콘들 중 하나로 설정하고 반드시 넘어오도록 함
// 온 프레스 값이 함수로 넘어오도록 설정
// id 값이 문자열이도록 설정
IconButton.propTypes = {
    icon: PropTypes.oneOf(Object.values(icons)).isRequired,
    onPress: PropTypes.func,
    item: PropTypes.object
};

export default IconButton;