import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components"
import StrokeButton from "../../components/Button/button.style";
import Icon from "../../components/Icon/icon";
import IconWithText from "../../components/Icon/iconText";
import PaletteText from "../../components/Text/text.style";
import PaletteInputText from "../../components/TextInput/input.text";
import { Box, FullWidthBox } from "../../ui/Box/box.ui";
import { ColumnFlexBox, RowFlexBox } from "../../ui/FlexBox/FlexBox";

const AssigneeContainer = styled.View`
width: auto;
height: 45px;
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
border-radius: 24px;
flex-direction: row;
align-items: center;
padding-right: 12px;
`

const AssigneeIconContainer = styled.View`
width: 45px;
height: 45px;
background: #FFFFFF;
box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.07);
border-radius: 24px;
justify-content: center;
align-items: center;
`

const AddTodoBoxContainer = styled.View`
width: auto;
height: 45px;
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
border-radius: 10px;
align-items: center;
flex-direction: row;
padding-right: 18px;
padding-left: 18px;
`

const AddTodoTextInput = styled(PaletteInputText)`
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
border-radius: 10px;
`

const AddTodoDescriptionInput = styled(PaletteInputText)`
height: 200px;

background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
border-radius: 10px;
`

const UploadResourcesContainer = styled.View`
width: 269px;
height: 74px;

background: #FFFFFF;
border: 2px dashed #4B5D6B;
border-radius: 10px;
justify-content: center;
align-items: center;
`

const UploadResources = () => {
    return (
        <UploadResourcesContainer>
            <PaletteText>Upload Resources</PaletteText>
        </UploadResourcesContainer>
    )
}

export default function AddTodoSection() {
    return (
        <FullWidthBox>
            <ColumnFlexBox fullWidth={true} centerItems={true}>

                <RowFlexBox marginTop={30}>
                    <AssigneeContainer>
                        <AssigneeIconContainer>
                            <Icon size={20}
                                source={require("../../assets/add_assignee_icon.png")} />
                        </AssigneeIconContainer>
                        <Box marginLeft={10}>
                            <PaletteText
                                color={"#4B5D6B"}>Assignees</PaletteText>
                        </Box>
                    </AssigneeContainer>
                    <Box marginLeft={20}>
                        <AddTodoBoxContainer >
                            <PaletteText color={"#4B5D6B"}>Assignees</PaletteText>
                            <Box marginLeft={50}>
                                <Icon size={20}
                                    source={require("../../assets/back_icon.png")} />
                            </Box>
                        </AddTodoBoxContainer>
                    </Box>

                </RowFlexBox>

                <FullWidthBox horizontalPadding={40} marginTop={30}>
                    <AddTodoTextInput placeholder={"Enter action text"} />
                </FullWidthBox>

                <RowFlexBox marginTop={30}>
                    <Box horizontalMargin={20}>
                        <AddTodoBoxContainer>
                            <IconWithText text={"Due Date"} />
                        </AddTodoBoxContainer>
                    </Box>
                    <Box horizontalMargin={20}>
                        <AddTodoBoxContainer>
                            <IconWithText text={"Due Time"} />
                        </AddTodoBoxContainer>
                    </Box>
                </RowFlexBox>

                <FullWidthBox horizontalPadding={40} marginTop={30}>
                    <AddTodoDescriptionInput placeholder={"Enter Description"} />
                </FullWidthBox>

                <FullWidthBox centerItems={true} marginTop={30}>
                    <TouchableOpacity>
                        <UploadResources />

                    </TouchableOpacity>
                </FullWidthBox>

                <FullWidthBox horizontalPadding={100} marginTop={30}>
                    <StrokeButton
                        buttonColor={"#F86D70"}
                        height={40}
                        buttonText={"CREATE"}
                        textColor={"white"} />
                </FullWidthBox>

            </ColumnFlexBox>
        </FullWidthBox >
    );
}