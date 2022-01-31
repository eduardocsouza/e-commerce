import styled from  'styled-components';
import logo from '../../imagens/logo3.png'

export const NavBar = () => {
    return (
        <Nav className="navbar-loja">
            <h3>Loja</h3>
            <ListUl>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
            </ListUl>
        </Nav>

    );
};


const Nav = styled.nav`

    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    justify-content: space-evenly;
    border: 1px solid black; 
    align-items: center; 

`;

const ListUl = styled.ul`
    display:flex;
    list-style: none;

    li{
        padding-left: 50px;
        margin-top: 10px;
    }

    a{
        text-decoration: none;
    } 
`;
