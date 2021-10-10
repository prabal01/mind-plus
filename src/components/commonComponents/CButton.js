import styled from 'styled-components';


export const CButton = styled.button`
height: 40px;
background-color: #605ff6;
color: white;
font-size: 18px;
border: none;
border-radius:12px;
${(props)=>props.w && 'width:'+props.w+';'}

`;