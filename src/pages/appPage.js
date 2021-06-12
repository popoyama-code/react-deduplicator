import React, { useState, useRef, useCallback, useEffect } from 'react'
import AppTemplate from '../components/templates/appTemplate'
import {sortByName} from '../helper/appHelper'
import constants from '../helper/constants'
export const AppContext = React.createContext()

function AppPage() {
  const delimiter = useRef(null)
  const source = useRef(null)
  const fileInput = useRef(null)
  const [order, setorder] = useState("")
  const [words, setwords] = useState([])
  const [output, setOutput] = useState("")
  const [isOpened, setIsOpened] = useState(false)
  const [alert, setAlert] = useState(null)

  const HandleSubmit = useCallback((e) => {
    let text = source.current.value
    if (text) {
      let textArray = []
      const delimiterVal = delimiter.current.value
      if (delimiterVal !== "") {
        textArray = text.split(delimiterVal)
      } else {
        text = text.replace(/\r\n|\r/g, "\n")
        textArray = text.split("\n")
      }
      const wordsArray = Array.from(new Set(textArray))
      setwords(wordsArray)
      setAlert("重複を削除しました")
    } else {
      setAlert("テキストを入力してください")
    }
    e.preventDefault()
  }, [])

  const HandleClickLoad = useCallback(() => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }, [])

  const HandleClickSave = useCallback(() => {
    const blob = new Blob([output],{type:"text/plan"})
    const a = document.createElement("a")
    a.href = URL.createObjectURL(blob)
    document.body.appendChild(a)
    a.download = "output.txt"
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(a.href)
  }, [output])

  const HandleChangeLoad = useCallback(file => {
    if (file instanceof File) {
      if (file.type !== "text/plain") {
        setAlert("テキストファイルを選択してください")
        return false
      }
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = () => {
        if (reader.result.length > constants.LENGTH.SOURCE) {
          setAlert(`入力出来る文字数は${constants.LENGTH.SOURCE.toLocaleString()}文字以下です`)
          return false
        }
        source.current.value = reader.result
        setAlert("ファイルを読み込みました")
      }
    }
  }, [])

  const HandleClickCopy = useCallback(() => {
    const elmTextarea = document.createElement("textarea")
    elmTextarea.textContent = output
    const tgt_body = document.getElementsByTagName("body")[0]
    tgt_body.appendChild(elmTextarea)
    elmTextarea.select()
    document.execCommand('copy')
    tgt_body.removeChild(elmTextarea)
    setAlert("クリップボードにコピーしました")
  }, [output])

  const HandleChangeSelect = useCallback(val => {
    setorder(val)
  }, [])

  useEffect(() => {
    const delimiterVal = delimiter.current.value ? delimiter.current.value : "\n"
    if (order === "ASC" || order === "DESC") {
      const sortedWords = sortByName(words, order)
      setOutput(sortedWords.join(delimiterVal))
    } else {
      setOutput(words.join(delimiterVal))
    }
  }, [words, order])

  useEffect(() => {
    if (output) {
      setIsOpened(true)
    }
  }, [output])

  useEffect(() => {
    if (alert) {
      const interval = setInterval(() => {
        setAlert(null)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [alert])

  return (
    <AppContext.Provider value={{source: source, delimiter: delimiter, fileInput: fileInput}}>
      <AppTemplate
        alert={alert}
        isOpened={isOpened}
        output={output}
        onSubmit={HandleSubmit}
        onClickLoad={HandleClickLoad}
        onClickSave={HandleClickSave}
        onClickCopy={HandleClickCopy}
        onChangeSelect={HandleChangeSelect}
        onChangeLoad={HandleChangeLoad}
      />
    </AppContext.Provider>
  )
}

export default AppPage
