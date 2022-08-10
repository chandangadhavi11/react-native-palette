import { Text } from "react-native";
import styled from "styled-components"

const StyledText = styled.Text`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: ${props => props.size || "16"}px;
    /* identical to box height */

    color: ${props => props.color || "#2B2A29"};


    ${props => props.type === "heading" &&
        `font-size: 24px;
        line-height: 22px;`
    }

    ${props => props.type === "paragraph" &&
        `font-size: 18px;
        line-height: 22px;`
    }

    ${props => props.float === "right" &&
        `margin-left: auto;
        order: 2;`
    }
`

export default function PaletteText({ type, float, color, children, ...props }) {
    return (
        <StyledText
            type={type}
            float={float}
            color={color}
            {...props}
        >{children}</StyledText>
    );
}