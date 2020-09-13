/* eslint-disable prettier/prettier */
import React, { forwardRef, useEffect, useRef } from 'react'
import styled from 'styled-components';

const Checkbox= styled.input.attrs({
  type: 'checkbox'
})`

`

const DtCheckBox = forwardRef(({ indeterminate, header, ...rest }, ref) => {
  const defaultRef = useRef()
  const resolvedRef = ref || defaultRef

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return (
    <>
      {header ? (
        <Checkbox ref={resolvedRef} {...rest} style={{ color: 'white' }} />
      ) : (
        <Checkbox ref={resolvedRef} {...rest} color='primary' />
      )}
    </>
  )
})

export default DtCheckBox
