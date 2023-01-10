import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    height: 100vh;
`; 

export const Box = styled.main`
    width: 340px;   
    padding: 2rem 1rem;
    background: #fff;
`;

export const Title = styled.h2`
    font-size: 1rem;
    color: #444;
    text-align: center;
    font-weight: 400;
    margin: 20px;
`
export const FieldGroup = styled.div`
    margin: 10px 0px;
`

export const TextField = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    color: #444;
    padding: 10px 20px;
    border-radius: 3px;
    outline: #444;
`;


export const HelperText = styled.span`
    color: #f00;
    font-size: 0.8rem;
`

export const LoginButton = styled.button`
    margin-top: 20px;
    height: 50px;
    width: 100%;
    background: #fc0;
    color: #000;
    font-size: 1rem;
    text-align: center;
    border: 0;
    transition: .3s;
    &:hover {
        filter: brightness(0.9);
        cursor: pointer;
    }
`;
