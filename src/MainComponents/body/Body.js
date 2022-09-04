import React from 'react'
import "../../App.css"
import Banner from './Banner'
import LoginSection from './LoginSection'
import NidPortal from './nidportalSection'


export default function Body() {
  return (
    <div>
        <Banner/>
        <LoginSection/>
        <NidPortal/>
    </div>
  )
}
