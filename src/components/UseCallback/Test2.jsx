import React, {memo} from 'react'

export default memo(function Test2({handleSum}) {
    console.log("test 2 reload",     handleSum())

  return (
    <div>Test2</div>
  )
})
