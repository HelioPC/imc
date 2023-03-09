import styled from 'styled-components';

export const AppScreen = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        margin-top: 28px;
    }

    span {
        margin: 12px 0;
    }
`

export const AppInputArea = styled.div`
    width: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        width: 100%;
        max-width: 250px;
        padding: 8px 10px;
        margin: 50px 0 0 0;
        height: 46px;
        border: 0;
        border-radius: 16px;
        background-color: black;
        color: #FFF;
        font-size: 18px;
    }
`
