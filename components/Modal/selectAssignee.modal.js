import { useEffect, useState } from "react";
import { useRef } from "react";
import { ActivityIndicator, ScrollView, Text, Touchable, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { getAllUsers } from "../../apis/user.api";
import PaletteText from "../Text/text.style";
import styled from "styled-components"
import { Box, FullWidthBox } from "../../ui/Box/box.ui";
import { RowFlexBox } from "../../ui/FlexBox/FlexBox";
import ProfileIcon from "../Icon/profile.icon";

const UserItem = ({ name }) => {
    const [status, setStatus] = useState(false)
    const UserItemContainer = styled.View`
    width: 100%;
    height: 73px;
    background: ${status ? "#4B5D6B" : "#F7F7F7"};
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px;`

    return (
        <TouchableOpacity style={{ width: "100%" }} onPress={() => {
            setStatus(!status)
        }}>
            <UserItemContainer>
                <Box>
                    <RowFlexBox fullHeight={true} centerItems={true}>
                        <Box borderRadius={100}
                            width={46}
                            height={46}
                            marginLeft={10}
                            backgroundColor={"black"} />
                        <Box marginLeft={10}>
                            <PaletteText color={status ? "white" : "#4B5D6B"}>{name}</PaletteText>
                        </Box>
                    </RowFlexBox>
                </Box>
            </UserItemContainer>
        </TouchableOpacity>

    )
}

export default function SelectAssigneeSection({ open, onClose }) {

    const refRBSheet = useRef();
    const { data: usersData, loading: usersDataLoading, error: usersDataError } = getAllUsers();
    const [selectedUsers, setSelectedUsers] = useState([]);

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

    useEffect(() => {
        console.log(selectedUsers);
    }, [selectedUsers]);

    return (
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            height={600}
            onClose={onClose}
            customStyles={{
                wrapper: {
                    backgroundColor: "transparent"
                },
                draggableIcon: {
                    backgroundColor: "#000"
                }
            }}>
            <FullWidthBox horizontalPadding={20}>
                <ScrollView style={{ width: "100%" }}>
                    {
                        usersDataLoading === false ?
                            usersData.map((user, index) => {
                                return (
                                    <TouchableOpacity onPress={() => {
                                        setSelectedUsers([...selectedUsers, user._id])
                                    }}>
                                        <UserItem name={user.email} />

                                    </TouchableOpacity>
                                )
                            }
                            ) : <ActivityIndicator />
                    }
                </ScrollView>
            </FullWidthBox>
        </RBSheet>
    )
}