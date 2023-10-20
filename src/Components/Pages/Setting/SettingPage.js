import './SettingPage.css'
import React, { useState, useMemo, useEffect } from 'react';

import Tabs from '../../Tabs';
import PatternsPage from './PatternsPage';


function SettingPage(props) {

  const disable = useMemo(() => props.disableBtnStatus, [props.disableBtnStatus])
  useEffect(() => disable(), [disable])

  let activeTab = sessionStorage.getItem('activeTab')
  if (!activeTab) activeTab = 'Мостки'
  let currentPage = (activeTab === 'Мостки') ? 'BridgePage' : 'StairPage'

  const [basicActive, setBasicActive] = useState(activeTab);

  const [tabPage, setTabPage] = useState(currentPage);

  const handleBasicClick = (event) => {
    const value = event.target.innerText

    if (value === basicActive) {
      return;
    }

    setBasicActive(value);

    (value === 'Мостки') ? setTabPage('BridgePage') : setTabPage('StairPage')

    sessionStorage.setItem('activeTab', value)
  }

  const pages = [<PatternsPage className='BridgePage' initial='bridgeInitialPatterns' index='bp_' setToast={props.setToast} />,
    <PatternsPage className='StairPage' initial='stairInitialPatterns' index='sp_' setToast={props.setToast} />]

  return (
      <div className='setting-page'>
        <Tabs
          onClick={handleBasicClick}
          items={['Мостки', 'Стремянки']}
          activeTab={activeTab}
          pages={pages}
          tabPage={tabPage}
        />
      </div>
    )
}

export default SettingPage