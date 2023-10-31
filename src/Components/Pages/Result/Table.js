import './Table.css'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

function Table(props) {
    // console.log(props)
    const fParams = props.data.fData
    const jParams = props.data.jData
    const cParams = props.data.cData

    const fData = {}
    const jData = {}
    const cData = {}
    
    const makeDataObject = (params, data) => {
 
        let count = 1
        Object.keys(params).forEach(elm => {

            if(data[params[elm].type]) {
                if (props.cardName !== 'Сводная') {
                    data[params[elm].type].quantity = (Number(data[params[elm].type].quantity) + Number(params[elm].length * params[elm].quantity)).toFixed(3)
                    data[params[elm].type].mass = (Number(data[params[elm].type].mass) + Number(params[elm].mass * params[elm].quantity)).toFixed(3)
                    data[params[elm].type].totalQuantity = (Number(data[params[elm].type].totalQuantity) + Number(params[elm].length * params[elm].quantity * props.data.quantity)).toFixed(3)
                    data[params[elm].type].totalMass = (Number(data[params[elm].type].totalMass) + Number(params[elm].mass * params[elm].quantity * props.data.quantity)).toFixed(3)
                } else {
                    data[params[elm].type].totalQuantity = (Number(data[params[elm].type].totalQuantity) + Number(params[elm].length * params[elm].quantity)).toFixed(3)
                    data[params[elm].type].totalMass = (Number(data[params[elm].type].totalMass) + Number(params[elm].mass * params[elm].quantity)).toFixed(3)
                }
            } else {
                data[params[elm].type] = {}
                data[params[elm].type].number = count
                data[params[elm].type].unit = params[elm].unit

                if (props.cardName !== 'Сводная') {
                    data[params[elm].type].quantity = Number((params[elm].length * params[elm].quantity).toFixed(3))
                    data[params[elm].type].mass = Number((params[elm].mass * params[elm].quantity).toFixed(3))
                    data[params[elm].type].totalQuantity = Number((data[params[elm].type].quantity * props.data.quantity).toFixed(3))
                    data[params[elm].type].totalMass = Number((data[params[elm].type].mass * props.data.quantity).toFixed(3))
                } else {
                    data[params[elm].type].quantity = '-'
                    data[params[elm].type].mass = '-'
                    data[params[elm].type].totalQuantity = Number((params[elm].length).toFixed(3))
                    data[params[elm].type].totalMass = Number((params[elm].mass).toFixed(3))
                }
            }
            count++
        })
    }

    makeDataObject(fParams, fData)

    makeDataObject(jParams, jData)

    makeDataObject(cParams, cData)


    return (
        <div className="bridge-table">
            <section className="fiberglass">
                <div className="label">Стеклопластик</div>
                <table className="table">
                    <thead>
                        <TableHeader type={'bridge'}/>
                        {
                            Object.keys(fData).map(elm => {
                                return (
                                    <TableBody
                                        key={elm}
                                        number={fData[elm].number}
                                        name={elm}
                                        unit={fData[elm].unit}
                                        quantity={fData[elm].quantity}
                                        mass={fData[elm].mass}
                                        totalQuantity={fData[elm].totalQuantity}
                                        totalMass={fData[elm].totalMass}
                                    />
                                )
                            })
                        }
                    </thead>
                </table>
            </section>
            <section className="joins">
                <div className="label">Крепеж</div>
                <table className="table">
                    <thead>
                        <TableHeader type={'bridge'}/>
                        {
                            Object.keys(jData).map(elm => {
                                return (
                                    <TableBody
                                        key={elm}
                                        number={jData[elm].number}
                                        name={elm}
                                        unit={jData[elm].unit}
                                        quantity={jData[elm].quantity}
                                        mass={jData[elm].mass}
                                        totalQuantity={jData[elm].totalQuantity}
                                        totalMass={jData[elm].totalMass}
                                    />
                                )
                            })
                        }
                    </thead>
                </table>
            </section>
            <section className="connectedJoins">
                <div className="label">Соединительный крепеж</div>
                <table className="table">
                    <thead>
                        <TableHeader type={'bridge'}/>
                        {
                            Object.keys(cData).map(elm => {
                                return (
                                    <TableBody
                                        key={elm}
                                        number={cData[elm].number}
                                        name={elm}
                                        unit={cData[elm].unit}
                                        quantity={cData[elm].quantity}
                                        mass={cData[elm].mass}
                                        totalQuantity={cData[elm].totalQuantity}
                                        totalMass={cData[elm].totalMass}
                                    />
                                )
                            })
                        }
                    </thead>
                </table>
            </section>
            
        </div>
    )
}

export default Table