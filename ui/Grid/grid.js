import styled from "styled-components";

export const Grid = styled.View`
    display: grid;
    grid-template-row: auto;
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
`