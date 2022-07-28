import { SafeAreaView, ScrollView, Text } from "react-native";
import BackButton from "../../components/Button/back.button";
import PaletteTopBar from "../../components/TopBar/top.bar";
import { Grid } from "../../ui/Grid/grid";
import { Box, FloatRightBox, FullWidthBox } from "../../ui/Box/box.ui"
import LogOutButton from "../../components/Button/logout.button";
import { ColumnFlexBox, RowFlexBox } from "../../ui/FlexBox/FlexBox";
import ProfileIcon from "../../components/Icon/profile.icon";
import PaletteText from "../../components/Text/text.style";
import StrokeButton from "../../components/Button/button.style";
import IconWithText from "../../components/Icon/iconText";
import { Card } from "../../ui/Card/card.ui";
import Icon from "../../components/Icon/icon";
import SearchButton from "../../components/Button/search.button";
import SortButton from "../../components/Button/sort.button";
import FilterButton from "../../components/Button/filter.button";
import ByMeButton from "../../components/Button/byme.button";
import styled from "styled-components";
import AddTodoSection from "./addtodo.section";
import PaletteInputText from "../../components/TextInput/input.text";

export default function TabNavigationBar({ onSelectTab, currentTab }) {
    const TabItemText = styled.Text`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */

        text-align: center;

        color: ${props => props.active ? "#F86D70" : "#4B5D6B"};
    `

    const TabBarContainer = styled(Box)`
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    margin-top: 26px;
    padding-top: 12px;
    padding-bottom: 12px;
    `
    return (
        <TabBarContainer>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <RowFlexBox marginLeft={28}>
                    <Icon source={require('../../assets/add_icon.png')}
                        size={20} onPress={() => {
                            onSelectTab(0);
                        }} />
                    <Box marginLeft={30}>
                        <TabItemText
                            active={currentTab === 1}
                            onPress={() => {
                                onSelectTab(1);
                            }}>ALL</TabItemText>
                    </Box>
                    <Box marginLeft={30}>
                        <TabItemText
                            active={currentTab === 2}
                            onPress={() => {
                                onSelectTab(2);
                            }}>OPEN</TabItemText>
                    </Box>
                    <Box marginLeft={30}>
                        <TabItemText
                            active={currentTab === 3}
                            onPress={() => {
                                onSelectTab(3);
                            }}>COMPLETED</TabItemText>
                    </Box>
                    <Box marginLeft={30} marginRight={20}>
                        <TabItemText
                            active={currentTab === 4}
                            onPress={() => {
                                onSelectTab(4);
                            }}>CLOSED</TabItemText>
                    </Box>
                </RowFlexBox>
            </ScrollView>
        </TabBarContainer>

    );
}
