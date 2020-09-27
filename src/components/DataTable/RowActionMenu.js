/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Td,ActionLink} from '../Styled/DataTable';
import DropDown from '../DropDownMenu';

const RowActionMenu= ({items, icons})=>{

    const [showMenu, setShowMenu]= useState(false);

    return (
        <Td style={{textAlign: 'center'}}>
          <ActionLink onClick={()=> setShowMenu(!showMenu)}>{icons.RowMenu()}</ActionLink>
          <DropDown show={showMenu} items={items} onExit={()=> setShowMenu(!showMenu)}  />
        </Td>
      )
}

export default RowActionMenu;