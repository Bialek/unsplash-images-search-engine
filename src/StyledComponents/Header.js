import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-image: linear-gradient(to bottom, #fff 0%, #f8f8f8 100%);
    background-repeat: repeat-x;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
    background-color: #f8f8f8;
    border-color: #e7e7e7;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`

export const Logo = styled.a`
    display: inline-flex;
    text-decoration: none;
    color: #010B13;
    align-self: center;
    svg {
        margin: 0 auto;
        font-size: 3em;
    }
`