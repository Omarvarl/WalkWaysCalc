import Channel62x30x5 from '../../../Drawings/Channel62x30x5.jsx'
import Stand50x50x6 from '../../../Drawings/Stand50x50x6'
import Crossbar from '../../../Drawings/Crossbar.jsx'
import Bumper from '../../../Drawings/Bumper.jsx'
import Beam from '../../../Drawings/Beam.jsx'
import ConnectingTube from '../../../Drawings/ConnectingTube.jsx'
import ConnectingPlate from '../../../Drawings/ConnectingPlate.jsx'
import Joints from '../../../Drawings/Joints.jsx'
import FrameCrossbar from '../../../Drawings/FrameCrossbar'
import Floor from '../../../Drawings/Floor.jsx'
import Corner75x75x6 from '../../../Drawings/Corner75x75x6.jsx'


export default function DrawingChose(width) {
    const rail = Channel62x30x5()
    const stand = Stand50x50x6(50, [750, 1450])
    const crossbar = Crossbar(100, 650)
    const crossbar2 = Crossbar(800, 650)
    const crossbar3 = Crossbar(1500, 550)
    const bumper = Bumper(650, 575, 100, 800, 1500)
    const beam = Beam(650, 550, 100, 800, 1500)
    const connectingTube = ConnectingTube()
    const connectingPlate = ConnectingPlate()
    const joints = Joints(50, [750, 1450])
    const frameCrossbar = FrameCrossbar()
    const floor = Floor(650, 550, 100, 800, 1500)
    const corner = Corner75x75x6()

    let result = <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' viewBox='0 0 3300 1500'>
        {rail}
        {stand}
        {crossbar}
        {crossbar2}
        {crossbar3}
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