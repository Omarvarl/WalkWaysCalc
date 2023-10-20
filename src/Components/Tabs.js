import './Tabs.css'

function Tabs(props) {

    return (
        <div className="tabs">
            <div className="tab-items">
            {
                props.items.map(item => {  //  loop for each 
                    let active = ''
                    let uncorrectCard = ''
                    if (item === props.activeTab) active = 'active-tab'
                    if (props.uncorrectCards && props.uncorrectCards.includes(item)) uncorrectCard = 'uncorrect-tab'
                    return <div
                        className={`tabs-item ${active} ${uncorrectCard}`}
                        onClick={props.onClick}
                        key={item}
                    >{item}</div>
                })
            }
            </div>
            {/* <div className="tab-area"> */}
                {
                    props.pages.map(item => {
                        let active = ''
                        if (item.props.className !== props.tabPage) active = 'd-none'
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