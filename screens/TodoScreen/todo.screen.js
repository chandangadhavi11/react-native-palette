import { SafeAreaView, ScrollView, Text } from "react-native";
import BackButton from "../../components/Button/back.button";
import PaletteTopBar from "../../components/TopBar/top.bar";
import { Grid } from "../../ui/Grid/grid";
import { Box, FloatRightBox, FullWidthBox } from "../../ui/Box/box.ui"
import LogOutButton from "../../components/Button/logout.button";
import { ColumnFlexBox, RowFlexBox } from "../../ui/FlexBox/FlexBox";
import ProfileIcon from "../../components/Icon/profile.icon";
import { Card } from "../../ui/Card/card.ui";
import Icon from "../../components/Icon/icon";
import SearchButton from "../../components/Button/search.button";
import SortButton from "../../components/Button/sort.button";
import FilterButton from "../../components/Button/filter.button";
import ByMeButton from "../../components/Button/byme.button";
import styled from "styled-components";
import AddTodoSection from "./addtodo.section";
import PaletteInputText from "../../components/TextInput/input.text";
import TabNavigationBar from "./navigation.section";
import { useState } from "react";
import TodoListSection from "./todoList.section";

const ProfileLeftTopBar = () => {
    return (
        <Box marginRight={46}>
            <ProfileIcon size={75}
                onPress={() => { console.log("Chandan") }} />
        </Box>

    );
}

const ProfileRightTopBar = () => {
    return (
        <Box>
            <SearchButton
                onPress={() => { console.log("Chandan") }} />
        </Box>
    );
}

const AddButton = () => {
    return (
        <Card width={88} height={94} centerItems={true}>
            <Icon
                source={require('../../assets/back_icon.png')}
                size={24}
                onPress={() => { console.log("Chandan") }}
            />
        </Card>
    );
}

const IconCard = () => {
    return (
        <Card width={56} height={56} centerItems={true} marginRight={20}>
            <Icon
                source={require('../../assets/back_icon.png')}
                size={24}
                onPress={() => { console.log("Chandan") }}
            />
        </Card>
    );
}




export default function TodoScreen() {
    const [sectionIndex, setSectionIndex] = useState(1);

    return (
        <SafeAreaView>

            <PaletteTopBar
                renderLeft={() => <ProfileLeftTopBar />}
                renderRight={() => <ProfileRightTopBar />}
                topBarTitleText="To do" />

            <FullWidthBox>
                <FloatRightBox>
                    <RowFlexBox marginRight={24}>
                        <Box marginRight={20}>
                            <SortButton />
                        </Box>
                        <Box marginRight={20}>
                            <FilterButton />
                        </Box>
                        <ByMeButton />
                    </RowFlexBox>
                </FloatRightBox>
            </FullWidthBox>

            <TabNavigationBar onSelectTab={setSectionIndex} currentTab={sectionIndex} />

            {sectionIndex === 0 && <AddTodoSection />}
            {sectionIndex === 1 && <TodoListSection />}
            {sectionIndex === 2 && <TodoListSection />}
            {sectionIndex === 3 && <TodoListSection />}
            {sectionIndex === 4 && <TodoListSection />}


        </SafeAreaView >

    );
}
