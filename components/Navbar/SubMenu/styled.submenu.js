import styled from 'styled-components'
import { Container,  } from '../../../sharedStyled'


export const SubItemBox = styled(Container)`
    border:1px solid black;
    position:absolute;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    margin-top:1.25rem;
    background-color:white;
    border-radius: 0.75rem;
    left:0%;
`


export const SubItemText = styled.span`
    :hover{
        text-decoration:underline;
    }
    font-size:1.5rem;
    margin:5px 0; 
    color:black;
`
