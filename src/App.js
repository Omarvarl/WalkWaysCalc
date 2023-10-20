import './App.css';
import {Routes, Route} from "react-router-dom";
import { useState, useCallback } from 'react';

import Layout from './Components/Layout'
import CardPage from './Components/Pages/Cards/CardsPage';
import SettingPage from './Components/Pages/Setting/SettingPage';
import ResultPage from './Components/Pages/Result/ResultPage';
import HomePage from './Components/Pages/Home/HomePage';
import Toast from './Components/Toast';

function App() { 

  let initialCards = sessionStorage.getItem('initialCards')
  if (!initialCards) {
      initialCards = [0]
      sessionStorage.setItem('initialCards', initialCards)
      let data = {
        id: 'c_0',
        name: 'Новая карточка',
        type: 'Мосток'
      }
      sessionStorage.setItem('c_0', JSON.stringify(data))
  }

  let bridgeInitialPatterns = sessionStorage.getItem('bridgeInitialPatterns')
  if (!bridgeInitialPatterns) {
    bridgeInitialPatterns = [0]
    sessionStorage.setItem('ibridgeInitialPatterns', bridgeInitialPatterns)
    let data = {
      id: 'bp_0',
      name: 'Мосток стд.',
      railType: 'Швеллер 62x30x5',
      standType: 'Профиль 50x50x6',
      fillingType: 'Поперечина',
      beamType: 'Швеллер 150x50x6',
      frameCrossbarType: 'Швеллер 74x60x7',
      crossbarType: 'Профиль 40x40x3',
      crossbarQuantity: 1
    }

    sessionStorage.setItem('bp_0', JSON.stringify(data))
}

let stairInitialPatterns = sessionStorage.getItem('stairInitialPatterns')
if (!stairInitialPatterns) {
  stairInitialPatterns = [0]
  sessionStorage.setItem('stairInitialPatterns', stairInitialPatterns)
  let data = {
    id: 'sp_0',
    name: 'Стремянка стд.',
    stairBeamType: 'Профиль 88x58x5',
    stepType: 'Трубка рифленая d32',
    type: 'Просто стремянка',
    safeBoxLength: 0
  }

  sessionStorage.setItem('sp_0', JSON.stringify(data))
}

const [downloadBtnStatus, setDownloadBtnStatus] = useState('d-none')

const [data, setData] = useState('')


const activateDownloadBtn = (param) => {
  setDownloadBtnStatus('')
  setData(param)
}


const disableDownloadBtn = () => {
  setDownloadBtnStatus('d-none')
}

const [toast, setToast] = useState({visibility: {display: 'none'}})

const setToastData = useCallback((data) => {
  const hideToast = () => {
    setToast({visibility: {display: 'none'}})
  }
  data.hide = hideToast
  data.visibility = {display: 'block'}
  setToast(data)
  setTimeout(() => {
    setToast({visibility: {display: 'none'}})
  }, 3000)
}, [setToast])

  return (
    <div className="screen">

      <Routes>
        <Route path="/" element={<Layout downloadBtnStatus={downloadBtnStatus} data={data} />}>
            <Route index element={<HomePage disableBtnStatus={disableDownloadBtn} />} />
            <Route path= "setting" element={<SettingPage disableBtnStatus={disableDownloadBtn} setToast={setToastData} />} />
            <Route path= "cards" element={<CardPage disableBtnStatus={disableDownloadBtn} setToast={setToastData} />} />
            <Route path= "result" element={<ResultPage activateDownloadBtn={activateDownloadBtn} setToast={setToastData} />} />
        </Route>
      </Routes>
      <Toast data={toast} style={toast.visibility}/>
    </div>
)
}

export default App;
