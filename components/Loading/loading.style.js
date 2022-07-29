import { ActivityIndicator } from "react-native";
import { FullWidthBox } from "../../ui/Box/box.ui";

export default function MaxDimensionLoading(props) {
    return (
        <FullWidthBox centerItems={true} {...props}>
            <ActivityIndicator size="large" />
        </FullWidthBox>
    );
}