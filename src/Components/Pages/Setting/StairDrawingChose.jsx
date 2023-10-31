import StairBeam from '../../../Drawings/StairBeam';
import StairStep from '../../../Drawings/StairStep';
import StairBracket from '../../../Drawings/StairBracket';
import StairCorner from '../../../Drawings/StairCorner';
import StairJoints from '../../../Drawings/StairJoints';
import SafeBox from '../../../Drawings/SafeBox';


export default function DrawingChose(data) {
    const beam = StairBeam(data.beamType, data.stairType);
    const step = StairStep(data.stepType, data.beamType);
    const barcket = StairBracket(data.beamType);
    const corner = StairCorner(data.beamType);
    const joints = StairJoints(data.beamType, data.stairType);
    let safeBox = ''

    if (data.stairType === 'С защитным коробом') {
        safeBox = SafeBox(data.beamType);
    }


    let result = <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' viewBox='0 0 4500 2450'>
        {beam}
        {step}
        {barcket}
        {corner}
        {joints}
        {safeBox}
    </svg>

    return result
}