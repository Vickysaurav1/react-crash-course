import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from '../MainHeader'

const RootLayout = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const showModalHandler = () => {
        setModalIsVisible(true);
      };
  return (
    <div>
        <MainHeader onCreatePost={showModalHandler}/>
        <Outlet />
    </div>
  )
}

export default RootLayout