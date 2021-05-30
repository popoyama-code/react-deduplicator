import React from 'react'
import Alert from '../molecules/alert'
import Deduplication from '../organisms/deduplication'

const AppTemplate = ({alert, ...props}) => {
  return (
    <>
      <Alert>{alert}</Alert>
      <Deduplication {...props} />
    </>
  )
}

export default AppTemplate