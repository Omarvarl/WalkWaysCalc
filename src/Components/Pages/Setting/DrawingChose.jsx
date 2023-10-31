import Rail from '../../../Drawings/Rail.jsx'
import Stands from '../../../Drawings/Stands'
import Crossbar from '../../../Drawings/Crossbar.jsx'
import Bumper from '../../../Drawings/Bumper.jsx'
import Beam from '../../../Drawings/Beam.jsx'
import ConnectingTube from '../../../Drawings/ConnectingTube.jsx'
import ConnectingPlate from '../../../Drawings/ConnectingPlate.jsx'
import Joints from '../../../Drawings/Joints.jsx'
import FrameCrossbar from '../../../Drawings/FrameCrossbar'
import Floor from '../../../Drawings/Floor.jsx'
import Corner75x75x6 from '../../../Drawings/Corner75x75x6.jsx'


export default function DrawingChose(data) {
    if (!data.crossbarQuantity || data.crossbarQuantity === 0) data.crossbarQuantity = 1
    const rail = Rail(data.railType, data.standType)

    const stand = Stands(50, [750, 1450], data.standType, data.railType, data.beamType)
    const crossbar = Crossbar(data.crossbarType, data.standType, Number(data.crossbarQuantity), data.fillingType)
    const bumper = Bumper(data.standType)
    const beam = Beam(data.beamType, data.standType)
    let connectingTube
    if (data.standType !== 'Профиль 88x58x5' && data.crossbarType !== 'Трубка круглая d32' && data.crossbarType !== 'Профиль 32x32x3') connectingTube = ConnectingTube(data.standType, Number(data.crossbarQuantity), data.fillingType)
    const connectingPlate = ConnectingPlate(data.beamType)
    const joints = Joints(data.standType, data.railType, data.beamType, data.crossbarType, Number(data.crossbarQuantity), data.fillingType)
    const frameCrossbar = FrameCrossbar(data.frameCrossbarType, data.standType, data.beamType)
    const floor = Floor(data.standType)
    const corner = Corner75x75x6(data.standType, data.beamType)

    let result = <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' viewBox='0 0 3320 1400'>
        {rail}
        {stand}
        {crossbar}
        {bumper}
        {beam}
        {connectingTube}
        {connectingPlate}
        {joints}
        {frameCrossbar}
        {floor}
        {corner}

    </svg>

    return result
}