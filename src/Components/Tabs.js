import './Tabs.css'
import { useState, useMemo, useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'


function Tabs(props) {

    let tabs = useMemo(() => props.items, [props])

    const [tabsList, setTabsList] = useState(tabs)
    const [pos, setPos] = useState(0)

    window.addEventListener('resize', useEffect(() => {
        setTimeout(() => {
            const tabsCount = Math.floor(window.innerWidth / 150) - 1
            let res = []
            for (let i = pos; i < tabsCount + pos; i++) {
                if (tabs[i]) res.push(tabs[i])
            }
            setTimeout(() => {
                if (tabsList.length !== res.length) setTabsList(res)
            }, 100)

        }, 100)
    }, []), false) 

    const moveForward = () => {
        const tabsCount = Math.floor(window.innerWidth / 150) - 1

        if (tabsCount <= tabs.length && pos + tabsCount < tabs.length) {
            let res = []
            for (let i = pos + 1; i < tabsCount + (pos + 1); i++) {
                if (tabs[i]) res.push(tabs[i])
            }
            setPos(pos + 1)
            setTabsList(res)
        }
    }

    const moveBack = () => {
        const tabsCount = Math.floor(window.innerWidth / 150) - 1

        if (tabsCount <= tabs.length && pos > 0) {
            let res = []
            for (let i = pos - 1; i < tabsCount + (pos - 1); i++) {
                if (tabs[i]) res.push(tabs[i])
            }
            setPos(pos - 1)
            setTabsList(res)
        }
    }

    return (
        <div className="tabs">
            <div className="tabs-line">
                <button className="prev" onClick={moveBack}>
                    <IoIosArrowBack />
                </button>
                <div className="tab-items">
                    {
                        tabsList.map((item) => {  //  loop for each 
                            let active = ''
                            let uncorrectCard = ''
                            if (item.id === props.activeTab) active = 'active-tab'
                            if (props.uncorrectCards && props.uncorrectCards.includes(item.name)) uncorrectCard = 'uncorrect-tab'
                            // index++
                            return <div
                                title={item.name}
                                className={`tabs-item ${active} ${uncorrectCard}`}
                                onClick={props.onClick}
                                key={item.id}
                                id={item.id}
                            >{item.name}
                            </div>
                        })
                    }
                </div>
                <button className="next" onClick={moveForward}>
                    <IoIosArrowForward />
                </button>

            </div>

            {/* <div className="tab-area"> */}
                {
                    props.pages.map(item => {
                        let active = '' 
                        if (item.props.id !== props.tabPage) active = 'd-none'
                        return (<div
                            className={`tab-page ${active}`}
                            key={item.props.className}
                        >{item}</div>)
                    })
                }
            {/* </div> */}

        </div>
    )
}

export default Tabs