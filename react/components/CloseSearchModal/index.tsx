import { useEffect, useState } from 'react'
import { useDrawer } from 'vtex.store-drawer/DrawerContext'
import { useRuntime } from 'vtex.render-runtime'

const CloseSearchModal = () => {
  const { close } = useDrawer()
  const { route: { path } } = useRuntime()

  const [url, setUrl] = useState(path)

  useEffect(() => {
    setUrl(path)
    if (path === url) return
    close()
  }, [path])

  return null
}

export default CloseSearchModal
