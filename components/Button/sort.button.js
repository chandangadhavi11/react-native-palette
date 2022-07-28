import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Icon from '../Icon/icon';

const SortButtonContainer = styled.View`
width: 32px;
height: 32px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);
border-radius: 100px;

justify-content: center;
align-items: center;
`


export default function SortButton({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}>
            <SortButtonContainer>
                <Icon source={require('../../assets/sort_icon.png')}
                    size={16} />
            </SortButtonContainer>
        </TouchableOpacity>

    );
}