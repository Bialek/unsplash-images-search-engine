import styled from 'styled-components';

export const PhotosWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
`

export const Photo = styled.div`
    width: 24%;
    height: 300px;
    margin-bottom: 10px;
    position: relative;
    &:hover {
        opacity: 0.7;
        svg {
            display: inline;
        }
    }
    @media screen and (max-width: 992px) {
        width: 48%;
    }
    @media  screen and (max-width: 576px) {
        width: 98%;
    }

`

export const PhotoImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
` 

export const PhotoBtn = styled.button`
    svg {
        position: absolute;
        right: 5px;
        top: 5px;
        color: #fff;
        display: none;
        font-size: 30px;
        &:hover {
            color: #ff0000;
        }
    }
`