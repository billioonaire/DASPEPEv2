import styled from "styled-components";

export const NavbarContainer = styled.div`
    background-color: #2d3436;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
`;

export const NavbarLogo = styled.img`
    height: auto;
    width: 250px;
    margin: 5px 0 0 25px;
`;

export const LinkContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    gap: 10px;
    margin: 0 15px 0 0;

    @media screen and (max-width: 1320px) {
        display: none;
    }
`;

export const Link = styled.li`

`;

export const LinkImg = styled.img`
    width: 110px;
    height: auto;

    transition: 0.5s;

    &:hover {
        width: 125px;
        cursor: pointer;
        filter: drop-shadow(5px 5px 20px #222);
    }
`;

export const Redirect = styled.a`

`

export const Wallet = styled.h2`
    display: none;
    font-size: 1.2rem;
    color: #fff;
    font-family: 'Rubik';
    font-weight: normal;
    margin: 0 25px 0 0;

    &.active {
        display: block;
    }
`

export const ConnectedWallet = styled.span`
    font-family: 'Rubik';
    font-weight: bold;
    display: inline-block;
`
