import styled from "styled-components";

export const Box = styled.View`
    align-items: ${props => props.centerItems === true ? "center" : "none"};
    justify-content:  ${props => props.centerItems === true ? "center" : "none"};
    margin-top: ${props => props.marginTop || "0px"};
    margin-bottom: ${props => props.marginBottom || "0px"};
    margin-left: ${props => props.marginLeft || "0px"};
    margin-right: ${props => `${props.marginRight}` || "0px"};

    padding-top: ${props => props.paddingTop || "0px"};
    padding-bottom: ${props => props.paddingBottom || "0px"};
    padding-left: ${props => props.paddingLeft || "0px"};
    padding-right: ${props => props.paddingRight || "0px"};
    ${props => props.fullWidth === true ?
        `width: 100%;` :
        `width: ${props.width || "auto"};`
    }
    ${props => props.fullHeight === true ?
        `height: 100%;` :
        `height: ${props.height || "auto"};`
    }
    ${props => props.horizontalMargin &&
        `margin-right: ${props.horizontalMargin}px;
        margin-left: ${props.horizontalMargin}px;`
    }
    ${props => props.horizontalPadding &&
        `padding-right: ${props.horizontalPadding}px;
        padding-left: ${props.horizontalPadding}px;`
    }
    ${props => props.verticalMargin &&
        `margin-top: ${props.verticalMargin}px;
        margin-bottom: ${props.verticalMargin}px;`
    }
    ${props => props.verticalPadding &&
        `padding-top: ${props.verticalPadding}px;
        padding-bottom: ${props.verticalPadding}px;`
    }

    background-color: ${props => props.backgroundColor || "transparent"};
    border-radius: ${props => props.borderRadius || "0px"};

`

export const FullWidthBox = styled(Box)`
    width: 100%;
`

export const FloatRightBox = styled(Box)`
    margin-left: auto;
    order: 2;
`

export const FloatBottomBox = styled(Box)`
    margin-top: auto;
    order: 2;
`