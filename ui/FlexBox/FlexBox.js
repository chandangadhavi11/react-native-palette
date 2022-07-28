import styled from "styled-components"

const FlexBox = styled.View`
    align-items: ${props => props.centerItems === true ? "center" : "none"};
    justify-content:  ${props => props.centerItems === true ? "center" : "none"};
    margin-top: ${props => props.marginTop || "0px"};
    margin-bottom: ${props => props.marginBottom || "0px"};
    margin-left: ${props => props.marginLeft || "0px"};
    margin-right: ${props => props.marginRight || "0px"};

    padding-top: ${props => props.paddingTop || "0px"};
    padding-bottom: ${props => props.paddingBottom || "0px"};
    padding-left: ${props => props.paddingLeft || "0px"};
    padding-right: ${props => props.paddingRight || "0px"};
    ${props => props.fullWidth === true ?
        `width: 100%;` :
        `width: ${props.width || "auto"}`
    }
    ${props => props.fullHeight === true ?
        `height: 100%;` :
        `height: ${props.height || "auto"};`
    }
    ${props => props.horizontalMargin &&
        `margin-right: ${props.horizontalMargin};
        margin-left: ${props.horizontalMargin};`
    }

    
`;

export const ColumnFlexBox = styled(FlexBox)`
    flex-direction: column;
`;

export const RowFlexBox = styled(FlexBox)`
    flex-direction: row;
`;