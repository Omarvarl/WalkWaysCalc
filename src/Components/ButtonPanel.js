import './ButtonPanel.css'
import { FiSave, FiBookOpen, FiDownload } from "react-icons/fi";


function ButtonPanel(props) {
    const saveSession = async () => {
    const opts = {
        suggestedName: 'WWC session',
        types: [
          {
            description: "wwc file",
            accept: { "text/plain": [".wwc"] },
          },
        ],
      };

    const initialCards = sessionStorage.getItem('initialCards')
    let initialCardsArr = []
    if (initialCards) initialCardsArr = initialCards.split(',')
    let cards = initialCardsArr.map(elm => {
        return sessionStorage.getItem(`c_${elm}`)
    })

    const bridgeInitialPatterns = sessionStorage.getItem('bridgeInitialPatterns')
    let bridgeInitialPatternsArr = []
    if (bridgeInitialPatterns) bridgeInitialPatternsArr = bridgeInitialPatterns.split(',')
    let bridgePatterns = bridgeInitialPatternsArr.map(elm => {
        return sessionStorage.getItem(`bp_${elm}`)
    })

    const stairInitialPatterns = sessionStorage.getItem('stairInitialPatterns')
    let stairInitialPatternsArr = []
    if (stairInitialPatterns) stairInitialPatternsArr = stairInitialPatterns.split(',')
    let stairPatterns = stairInitialPatternsArr.map(elm => {
        return sessionStorage.getItem(`sp_${elm}`)
    })

    const blob = initialCards + ';' + JSON.stringify(cards) + ';' + bridgeInitialPatterns + ';' + JSON.stringify(bridgePatterns) + ';' + stairInitialPatterns + ';' + JSON.stringify(stairPatterns)

    try {
        // Show the file save dialog.
        const handle = await window.showSaveFilePicker(opts);
        // Write the blob to the file.
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        return;
      } catch (err) {
        // Fail silently if the user has simply canceled the dialog.
        if (err.name !== 'AbortError') {
          console.error(err.name, err.message);
          return;
        }
      }

    }

    const openSession = async () => {

        const opts = {
            suggestedName: 'WWC session',
            types: [
              {
                description: "wwc file",
                accept: { "text/plain": [".wwc"] },
              },
            ],
          };

          try {
            // Show the file save dialog.
            const handle = await window.showOpenFilePicker(opts);
            const file = await handle[0].getFile()
            let fileText = (await file.text()).split(';')
            sessionStorage.setItem('initialCards', fileText[0])
            let cards = JSON.parse(fileText[1])
            cards.forEach(elm => {
                sessionStorage.setItem(JSON.parse(elm).id, elm)
            })

            sessionStorage.setItem('bridgeInitialPatterns', fileText[2])
            let bPatterns = JSON.parse(fileText[3])

            if (bPatterns.length && bPatterns[0]) bPatterns.forEach(elm => {
                sessionStorage.setItem(JSON.parse(elm).id, elm)
            })

            sessionStorage.setItem('stairInitialPatterns', fileText[4])
            let sPatterns = JSON.parse(fileText[5])
            if (sPatterns.length && sPatterns[0]) sPatterns.forEach(elm => {
                sessionStorage.setItem(JSON.parse(elm).id, elm)
                console.log(JSON.parse(elm))
            })

            window.location.reload()
            return;
          } catch (err) {
            // Fail silently if the user has simply canceled the dialog.
            if (err.name !== 'AbortError') {
              console.error(err.name, err.message);
              return;
            }
          }
    }

    const callBackendAPI = async (data) => {
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      })
      const body = await response
  
      if (response.status !== 200) {
        throw Error(body.message)
      }

      return body;
    }

    const downloadExcel = () => {

        callBackendAPI(props.data)
        // .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <div className="button-panel">
            <button
                className='save-session'
                title='Сохранить сессию'
                onClick={saveSession}
            >
                <FiSave />
            </button>

            <button className='open-session'
                title='Открытьь сессию'
                onClick={openSession}
            >
                <FiBookOpen />
            </button>

            <button className={`download-result ${props.downloadBtnStatus}`}
                // disabled={!flag}
                title='Скачать результат в excel'
                onClick={downloadExcel}
            >
               <FiDownload />
            </button>
        </div>
    )
}

export default ButtonPanel