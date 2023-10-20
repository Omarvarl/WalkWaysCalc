import './Table.css'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

function Table(props) {
    // console.log(props)
    const fParams = props.data.fData
    const jParams = props.data.jData

    const fData = {}
    const jData = {}

    const makeDataObject = (params, data) => {
        let count = 1
        Object.keys(params).forEach(elm => {
            if(data[params[elm].type]) {
                if (props.cardName !== 'Сводная') {
                    data[params[elm].type].quantity = (Number(data[params[elm].type].quantity) + Number(params[elm].length * params[elm].quantity)).toFixed(3)
                    data[params[elm].type].totalQuantity = (Number(data[params[elm].type].totalQuantity) + Number(params[elm].length * params[elm].quantity * props.data.quantity)).toFixed(3)
                } else {
                    data[params[elm].type].totalQuantity += Number((params[elm].length * params[elm].quantity).toFixed(3))
                }
            } else {
                data[params[elm].type] = {}
                data[params[elm].type].number = count
                data[params[elm].type].unit = params[elm].unit

                if (props.cardName !== 'Сводная') {
                    data[params[elm].type].quantity = Number((params[elm].length * params[elm].quantity).toFixed(3))
                    data[params[elm].type].totalQuantity = Number((data[params[elm].type].quantity * props.data.quantity).toFixed(3))
                } else {
                    data[params[elm].type].quantity = '-'
                    data[params[elm].type].totalQuantity = Number((params[elm].length * params[elm].quantity).toFixed(3))
                }
            }
            count++
        })
    }

    makeDataObject(fParams, fData)

    makeDataObject(jParams, jData)


    // console.log(Object.keys(fParams))

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
                                        totalQuantity={fData[elm].totalQuantity}
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
                                        totalQuantity={jData[elm].totalQuantity}
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