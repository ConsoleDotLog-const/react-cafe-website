import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaTimes} from 'react-icons/fa'


export const SideBarContainer = styled.aside`
    positions:fixed; 
    z-index:-999;
    width:350px;
    height:100%;
    background:#ffc500;
    display:grid;
    align-items: center;
    top: 0%;
    translation: 0.3s ease-in-out;
    right: ${({isOpen}) => (isOpen ? '0' : '-1000px') };

    @media screen and (max-width: 400px){
        width:100%
    }




`