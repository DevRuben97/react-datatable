/* eslint-disable prettier/prettier */
import React, { forwardRef, Fragment, useEffect, useRef } from 'react'
import styled from 'styled-components';
import CheckBox from '../Checkbox';

const DtCheckBox= ({header})=>{

  return (
    <Fragment>
        <CheckBox white={header}/>
    </Fragment>
  )
}

export default DtCheckBox;
