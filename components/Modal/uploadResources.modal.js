import { useEffect, useState } from "react";
import { useRef } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { getAllUsers } from "../../apis/user.api";
import PaletteText from "../Text/text.style";
import styled from "styled-components"
import { Box, FloatRightBox, FullWidthBox } from "../../ui/Box/box.ui";
import { RowFlexBox } from "../../ui/FlexBox/FlexBox";
import ProfileIcon from "../Icon/profile.icon";
import Icon from "../Icon/icon";
import IconWithText from "../Icon/iconText";

const ResourceItemContainer = styled.View`
width: 100%;
height: 50px;
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);

align-items: center;
justify-content: center;
margin-top: 10px;
`

export default function UploadResourcesModal({ open, onClose }) {

    const refRBSheet = useRef();
    const { data: usersData, loading: usersDataLoading, error: usersDataError } = getAllUsers();

    const openModal = () => {
        refRBSheet.current.open();
    }
    const closeModal = () => {
        refRBSheet.current.close();
    }

    useEffect(() => {
        if (open === true) {
            openModal();
        } else {
            closeModal();
        }
    }, [open]);

    return (
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            height={300}
            onClose={onClose}
            animationType="slide"
            customStyles={{
                wrapper: {
                    backgroundColor: "transparent"
                },
                draggableIcon: {
                    backgroundColor: "#000"
                }
            }}>
            <FullWidthBox horizontalPadding={20}>
                <PaletteText>Select resource type</PaletteText>

                <FullWidthBox marginTop={30}>
                    <TouchableOpacity>
                        <RowFlexBox fullWidth={true} centerItems={true}>
                            <ResourceItemContainer>
                                <FullWidthBox >
                                    <Box fullHeight={true} centerItems={true} marginLeft={20}>
                                        <IconWithText
                                            source={require("../../assets/res_icon.png")}
                                            text={"Files"}
                                            textColor={"#4B5D6B"}
                                        />
                                    </Box>

                                    <FloatRightBox marginTop={-30} marginRight={20}>
                                        <Icon
                                            source={require("../../assets/left_arrow_icon.png")}
                                            size={20} />
                                    </FloatRightBox>
                                </FullWidthBox>

                            </ResourceItemContainer>

                        </RowFlexBox>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <RowFlexBox fullWidth={true} centerItems={true}>
                            <ResourceItemContainer>
                                <FullWidthBox >
                                    <Box fullHeight={true} centerItems={true} marginLeft={20}>
                                        <IconWithText
                                            source={require("../../assets/link_icon_icon.png")}
                                            text={"Links"}
                                            textColor={"#4B5D6B"}
                                        />
                                    </Box>

                                    <FloatRightBox marginTop={-30} marginRight={20}>
                                        <Icon
                                            source={require("../../assets/left_arrow_icon.png")}
                                            size={20} />
                                    </FloatRightBox>
                                </FullWidthBox>

                            </ResourceItemContainer>

                        </RowFlexBox>
                    </TouchableOpacity>
                </FullWidthBox>
            </FullWidthBox>
        </RBSheet>
    )
}