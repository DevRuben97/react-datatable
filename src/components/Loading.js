/* eslint-disable prettier/prettier */
import styled from 'styled-components';


const Loading= styled.div`
border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid ${props=> props.theme.primary};
  width: 32px;
  height: 32px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
  
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

export default Loading;