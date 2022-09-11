import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

export const ConnectContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
        display: none;
    }
`

export const Connect = styled.img`
    transition: 0.5s;
    height: auto;
    width: 500px;

    &:hover {
        width: 520px;
        cursor: pointer;
        filter: drop-shadow(5px 5px 5px #222);
    }

    @media screen and (max-width: 550px) {
        width: 400px;
    }

    @media screen and (max-width: 400px) {
        width: 300px;
    }

`

export const NextButtonContainer = styled.div`
    display: none;
    &.active {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const NextButton = styled.img`
    &:hover {
        cursor: pointer;
    }
`

export const Pepe1Img = styled.img`
    display: none;

    &.active {
        display: block;
        position: absolute;
        width: 600px;
        height: auto;
        left: 0;
        bottom: 0;

        @media screen and (max-width: 1770px) {
            width: 500px;
        }

        @media screen and (max-width: 1100px) {
            width: 400px;
        }

        @media screen and (max-width: 800px) {
            width: 300px;
            position: absolute;
            left: auto;
        }
    }


`

export const Pepe2Img = styled.img`
    display: none;

    &.active {
        display: block;
        position: absolute;
        width: 600px;
        height: auto;
        right: 0;
        bottom: 0;

        @media screen and (max-width: 1770px) {
            width: 500px;
        }

        @media screen and (max-width: 1100px) {
            width: 400px;
        }

        @media screen and (max-width: 800px) {
            width: 300px;
            position: absolute;
            left: auto;
        }
    }
`

export const MintContainer = styled.div`
    display: none;

    &.active {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 175px 0 0 0;

    }
`

export const PepePrayImg = styled.img`
    display: block;
    z-index: 1;
    width: 450px;
    height: auto;
    position: absolute;
    top: 190px;

    @media screen and (max-width: 720px) {
        width: 400px;
    }

    @media screen and (max-width: 650px) {
        width: 350px;
    }
`
export const MintButtonContainer = styled.div`
    display: none;

    &.active {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        position: absolute;
        bottom: 0px;
    }

`

export const Mintx1 = styled.img`
    display: block;
    cursor: pointer;

    @media screen and (max-width: 720px) {
        width: 300px;
    }

    @media screen and (max-width: 650px) {
        width: 200px;
    }

    @media screen and (max-width: 420px) {
        width: 175px;
    }
`

export const Mintx2 = styled.img`
    display: block;
    cursor: pointer;

    @media screen and (max-width: 720px) {
        width: 300px;
    }

    @media screen and (max-width: 650px) {
        width: 200px;
    }

    @media screen and (max-width: 420px) {
        width: 175px;
    }
`

export const AscentButtonImg = styled.img`
    display: block;
    position: absolute;
    top: 110px;
    z-index: 10;

    @media screen and (max-width: 720px) {
        width: 300px;
    }
`

export const MintLeftImg = styled.img`
    display: block;
    position: absolute;
    left: 100px;
    bottom: 0;
    width: 500px;

    @media screen and (max-width: 1780px) {
        display: none;
    }
`

export const MintRightImg = styled.img`
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 600px;

    @media screen and (max-width: 1780px) {
        display: none;
    }
`

export const NOWLImg = styled.img`
    display: block;
    position: absolute;
    bottom: 0;
    width: 450px;

    &.active {
        display: none;
    }
`
