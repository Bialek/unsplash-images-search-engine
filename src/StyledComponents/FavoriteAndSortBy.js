import styled from 'styled-components';

export const FavoriteAndSortByWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;
    @media screen and (max-width: 768px) {
        justify-content:space-around;
    }
`

export const FavoriteAndSortByBtn = styled.button`
    padding: 10px;
    height: 40px;
    svg {
        margin-right: 5px;
    }
    margin-right: 20px;
`

export const FavoriteAndSortByLabel = styled.label`
    align-self: center;
    margin-right: 10px;
`