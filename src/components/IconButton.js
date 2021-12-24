import styled from "styled-components/native";
import { TouchableOpacity, View } from "react-native";
import PropTypes from 'prop-types';
import { icons } from "../icons";

// 아이콘이라는 스타일 컴포넌트를 생성
const Icon = styled.Image`
    width: 30px;
    height: 30px;
    margin: 10px;
    tint-color: ${({ theme }) => theme.text};
`;

// props로 받은 아이콘과 온 프레스 이벤트를 속성에 포함
const IconButton = ({ icon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Icon source={icon} />
            </View>
        </TouchableOpacity>
    );
};

// 아이콘의 값을 아이콘들 중 하나로 설정하고 반드시 넘어오도록 함
// 온 프레스 값이 함수로 넘어오도록 설정
IconButton.propTypes = {
    icon: PropTypes.oneOf(Object.values(icons)).isRequired,
    onPress: PropTypes.func
};

export default IconButton;