import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Icon from '../Icon/icon';

const FilterButtonContainer = styled.View`
width: 32px;
height: 32px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);
border-radius: 100px;

justify-content: center;
align-items: center;
`


export default function FilterButton() {
    return (
        <TouchableOpacity>
            <FilterButtonContainer>
                <Icon source={require('../../assets/filter_icon.png')}
                    size={16} />
            </FilterButtonContainer>
        </TouchableOpacity>
    );
}