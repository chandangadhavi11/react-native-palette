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

export default function TodoListSection() {
    const LineDecorator = styled.View`
    width: 6px;
    height: ${props => props.height ? props.height : "1"}px;

    background:  #595FDD;

    ${props => props.topRoundBorder &&
            `border-top-right-radius: 25px;
            border-top-left-radius: 25px;`
        }
    ${props => props.bottomRoundBorder &&
            `border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;`
        }
    `
    const Assignee = styled.View`
    width: 30px;
    height: 30px;
    margin-top: 4px;
    background: #ADADAD;
    border-radius: 200px;`
    return (
        <FullWidthBox>
            {/* First item */}
            <FullWidthBox backgroundColor={"#FFDEDE"}
                height={122}
                horizontalPadding={12}>

                <RowFlexBox fullHeight={true}>
                    <ColumnFlexBox marginTop={16}>
                        <PaletteText>Jun 20,</PaletteText>
                        <PaletteText>2021</PaletteText>
                        <PaletteText size={12}>6 am</PaletteText>
                        <PaletteText size={12} color={"#E06666"}>Overdue</PaletteText>
                    </ColumnFlexBox>

                    <ColumnFlexBox marginLeft={40} fullHeight={true} centerItems={true}>
                        <LineDecorator bottomRoundBorder={true} height={18} />
                        <Assignee />
                        <LineDecorator style={{ marginTop: "auto", order: "2" }} topRoundBorder={true} height={64} />
                    </ColumnFlexBox>

                    <ColumnFlexBox marginLeft={10}>
                        <ColumnFlexBox marginTop={10}>
                            <PaletteText size={10} color={"#595FDD8A"}>COLLEGE APPLICATION</PaletteText>
                            <PaletteText>Apply to Montgomery College</PaletteText>
                            <RowFlexBox marginTop={26} width={240}>
                                <Icon source={require('../../assets/file_icon.png')} size={18} />
                                <Box margin={6} />
                                <Icon source={require('../../assets/link_icon.png')} size={18} />
                                <FloatRightBox>
                                    <PaletteText color={"#F98308"}>OPEN</PaletteText>
                                </FloatRightBox>
                            </RowFlexBox>
                        </ColumnFlexBox>
                    </ColumnFlexBox>
                </RowFlexBox>


            </FullWidthBox>
        </FullWidthBox >
    );
}