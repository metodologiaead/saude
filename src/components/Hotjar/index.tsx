import * as React from 'react'
import useHotjar from 'react-use-hotjar'

const myCustomLogger = console.info

const Hotjar = () => {
  const { initHotjar } = useHotjar()

  React.useEffect(() => {
    initHotjar(1234567, 6, false, myCustomLogger)
  }, [initHotjar])

  return()
}

export default 
