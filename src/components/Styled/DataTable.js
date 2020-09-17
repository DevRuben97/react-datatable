/* eslint-disable prettier/prettier */
import styled from 'styled-components';


export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 90%;
  margin: 0 auto;
`

export const THead= styled.thead`
 background-color: ${props=> props.background};
  color: ${props=> props.background? "#ffffff": "black"};
  text-align: left;
  font-weight: bold;
`

export const Th= styled.th`
padding: 12px 15px;
`
export const Td= styled.td`
padding: 12px 15px;
`

export const TBody= styled.tbody`

&> tr{
  border-bottom: 1px solid #dddddd;
}

&> tr:nth-of-type(even){
  background-color: #f3f3f3;
}

&> tr:last-of-type{
  border-bottom: 2px solid ${props=> props.primaryColor};
}

&> tr:hover{
  color: ${props=> props.primaryColor};
  background-color: #f3f3f3;
}`

export const Tr= styled.tr`
cursor: ${props=> props.header && props.cursorPointer? 'pointer': 'default'};
`
