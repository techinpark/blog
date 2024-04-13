import React, { useEffect } from 'react'

import * as Dom from '../../utils/dom'
import { THEME } from '../../constants'

const src = 'https://giscus.app/client.js'
const branch = 'master'
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

export const Utterences = ({ repo }) => {
  const rootElm = React.createRef()

  useEffect(() => {
    const isDarkTheme = Dom.hasClassOfBody(THEME.DARK)
    const utterances = document.createElement('script')
    const utterancesConfig = {
      src,
      'data-repo': 'techinpark/blog-comments',
      'data-repo-id': 'MDEwOlJlcG9zaXRvcnkxODg4MTIwNTU=',
      'data-category': 'Announcements',
      'data-category-id': 'DIC_kwDOC0ELF84CUpJu',
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-theme': isDarkTheme ? DARK_THEME : LIGHT_THEME,
      'data-lang': 'ko',
      'data-loading': 'lazy',
      crossorigin: 'anonymous',
      async: true
    }

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })
    rootElm.current.appendChild(utterances)
  }, [])

  return <div className="utterences" ref={rootElm} />
}
