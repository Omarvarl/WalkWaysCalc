import './SettingPage.css'
import React, { useState, useMemo, useEffect } from 'react';

import Tabs from '../../Tabs';
import PatternsPage from './PatternsPage';


function SettingPage(props) {

  const disable = useMemo(() => props.disableBtnStatus, [props.disableBtnStatus])
  useEffect(() => disable(), [disable])

  let activeTab = sessionStorage.getItem('activeTab')
  if (!activeTab) activeTab = 'bridgeTab'
  let currentPage = (activeTab === 'bridgeTab') ? 'bridgeTab' : 'stairTab'

  const [basicActive, setBasicActive] = useState(activeTab);

  const [tabPage, setTabPage] = useState(currentPage);

  const handleBasicClick = (event) => {
    const value = event.target.id

    if (value === basicActive) {
      return;
    }

    setBasicActive(value);

    (value === 'bridgeTab') ? setTabPage('bridgeTab') : setTabPage('stairTab')

    sessionStorage.setItem('activeTab', value)
  }

  const pages = [<PatternsPage
      id='bridgeTab'
      className='BridgePage'
      initial='bridgeInitialPatterns'
      index='bp_'
      setToast={props.setToast}
    />,
    <PatternsPage
      id='stairTab'
      className='StairPage'
      initial='stairInitialPatterns'
      index='sp_'
      setToast={props.setToast}
    />]

  return (
      <div className='setting-page'>
        <Tabs
          onClick={handleBasicClick}
          items={[{name:'Мостки', id: 'bridgeTab'}, {name: 'Стремянки', id: 'stairTab'}]}
          activeTab={activeTab}
          pages={pages}
          tabPage={tabPage}
        />
      </div>
    )
}

export default SettingPage