import { Box } from "../Box/box.ui";
import styled from "styled-components"

export const Card = styled(Box)`
background: #FFFFFF;
box-shadow: ${props => props.shadow || "12px 12px 20px rgba(207, 207, 207, 0.25)"};
border-radius: ${props => props.borderRadius || "8px"};
`
