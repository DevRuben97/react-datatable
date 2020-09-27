/* eslint-disable prettier/prettier */
import React, {Fragment } from 'react'
import CheckBox from '../Checkbox';

const DtCheckBox= ({header, row,data, setSelectedItems, selectedItems})=>{


function checkedItem(value){
  const newArray= [...selectedItems];
  if (!header){
    if (value){
      newArray.push(row);
    }
    else{
     const index= newArray.indexOf(row);
     newArray.splice(index,1)
    }
    setSelectedItems(newArray);
  }
  else{
    const checks= document.getElementsByName('checkRowInput');
    checks.forEach((node)=> {
      node.checked= value;
    });
    setSelectedItems(value? data: []);
  }
  
}



  return (
    <Fragment>
        <CheckBox white={header} onChekedChange={checkedItem} name={header? 'checkRowInputHeader': 'checkRowInput'}/>
    </Fragment>
  )
}

export default DtCheckBox;
