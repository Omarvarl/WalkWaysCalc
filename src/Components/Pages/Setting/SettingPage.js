import './SettingPage.css'
import React, { useState, useMemo, useEffect } from 'react';

import Tabs from '../../Tabs';
import PatternsPage from './PatternsPage';


function SettingPage(props) {

  const disable = useMemo(() => props.disableBtnStatus, [props.disableBtnStatus])
  useEffect(() => disable(), [disable])

  let activeTab = sessionStorage.getItem('activeTab')
  if (!activeTab) activeTab = 't_b'
  let currentPage = (activeTab === 't_b') ? 't_b' : 't_s'

  const [basicActive, setBasicActive] = useState(activeTab);

  const [tabPage, setTabPage] = useState(currentPage);

  const handleBasicClick = (event) => {
    const value = event.target.id

    if (value === basicActive) {
      return;
    }

    setBasicActive(value);

    (value === 't_b') ? setTabPage('t_b') : setTabPage('t_s')

    sessionStorage.setItem('activeTab', value)
  }

  const pages = [<PatternsPage id='t_b' className='BridgePage' initial='bridgeInitialPatterns' index='bp_' setToast={props.setToast} />,
    <PatternsPage id='t_s' className='StairPage' initial='stairInitialPatterns' index='sp_' setToast={props.setToast} />]

  return (
      <div className='setting-page'>
        <Tabs
          onClick={handleBasicClick}
          items={['Мостки', 'Стремянки']}
          activeTab={activeTab}
          pages={pages}
          tabPage={tabPage}
          ids={['t_b', 't_s']}
        />
      </div>
    )
}

export default SettingPage