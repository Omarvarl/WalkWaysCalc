import './Tabs.css'

function Tabs(props) {
    let index = 0
    return (
        <div className="tabs">
            <div className="tab-items">
            {
                props.items.map(item => {  //  loop for each 
                    let active = ''
                    let uncorrectCard = ''
                    if (props.ids[index] === props.activeTab) active = 'active-tab'
                    if (props.uncorrectCards && props.uncorrectCards.includes(item)) uncorrectCard = 'uncorrect-tab'
                    index++
                    return <div
                        className={`tabs-item ${active} ${uncorrectCard}`}
                        onClick={props.onClick}
                        key={props.ids[index - 1]}
                        id={props.ids[index - 1]}
                    >{item}</div>
                })
            }
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