import './Layout.css'

import ButtonPanel from './ButtonPanel';
import Footer from "./Footer"
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout(props) {
    // console.log(props.data)
    return (
        <div className="layout">

            <Header size={props.size}/>

            <main className="main-area">
                <ButtonPanel downloadBtnStatus={props.downloadBtnStatus} data={props.data} />
                <Outlet />
            </main>

            <Footer />
  
        </div>
    )
}

export default Layout