import React, { useEffect, useState } from 'react'
import { toAbsoluteSVG } from '@/utils/helpers'
import SVG from 'react-inlinesvg'
import Link from 'next/link'

export default function Header({}) {
  const [toggleSidebar, setToggleSidebar] = useState(false)

  const toggleCreateNewModal = () => {
    setCreateNew(!createNew)
    document.querySelector('body').classList.toggle('no-scroll')
  }
  useEffect(()=>{
    let app_container = document.getElementById('app-container')
    const { innerWidth: width, innerHeight: height } = window;

    let sidebar = document.getElementById('sidebar')
    let label = document.querySelectorAll('[id*="menu-label"]')
    let breadcrum = document.getElementById('breadcrum')
    if(width<500){
      if (toggleSidebar) {
        setToggleSidebar(!toggleSidebar)
        label.forEach((element) => {
          element.style.display = 'block'
        })
        // logo.style.display = 'block'
        sidebar.style.width = 'fit-content'
        
        breadcrum ? (breadcrum.style.width = '85%') : ''
      } else {
        setToggleSidebar(!toggleSidebar)
  
        label.forEach((element) => {
          element.style.display = 'none'
        })
        // logo.style.display = 'none'
        sidebar.style.width = '4%'
        
        app_container.style.gridTemplateColumns = '58px 1fr'
        breadcrum ? (breadcrum.style.width = '96%') : ''
      }
    }
  },[])
  
  const handleSidebar = () => {
    // let logo = document.getElementById('logo')
    let app_container = document.getElementById('app-container')
    

    let sidebar = document.getElementById('sidebar')
    let label = document.querySelectorAll('[id*="menu-label"]')
    let breadcrum = document.getElementById('breadcrum')
    if (toggleSidebar) {
      setToggleSidebar(!toggleSidebar)
      label.forEach((element) => {
        element.style.display = 'block'
      })
      // logo.style.display = 'block'
      sidebar.style.width = 'fit-content'
      
      breadcrum ? (breadcrum.style.width = '85%') : ''
    } else {
      setToggleSidebar(!toggleSidebar)

      label.forEach((element) => {
        element.style.display = 'none'
      })
      // logo.style.display = 'none'
      sidebar.style.width = '4%'
      
      app_container.style.gridTemplateColumns = '58px 1fr'
      breadcrum ? (breadcrum.style.width = '96%') : ''
    }
  }
  return (
    <div className="w-header">
      <div className="flex ">
        <SVG
          onClick={handleSidebar}
          className="h-7 cursor-pointer "
          src={'/assets/svg/hamburger.svg'}
        ></SVG>
        <SVG
          className="h-7 cursor-pointer ham-burgur"
          src={'/assets/svg/w-logo.svg'}
        ></SVG>
      </div>
      <ul className="flex">
        <li className="flex mx-2">
          <Link href="/profile">
            <a className="flex">
              <SVG
                className="h-5 my-1"
                src={'/assets/svg/edit-account.svg'}
              ></SVG>
              <span className="font-BwN mx-4 block font-13 my-1 text-to-hide">
                Edit Account
              </span>
            </a>
          </Link>
        </li>
        <li className="flex mx-4">
          <Link href="/notifications">
            <a className="flex">
              {/* <section className="relative"> */}
              <span className="counter mt-1">3</span>
              <SVG
                className="h-5 mt-1 -ml-2"
                src={'/assets/svg/notification.svg'}
              ></SVG>

              {/* </section> */}

              <span className="font-BwN mx-4 block font-13 my-1 text-to-hide">
                Notifications
              </span>
            </a>
          </Link>
        </li>
        <li className="flex mx-2 relative">
          <a href="#" className="flex">
            <span className="font-BwN mx-4 block font-13 my-1 text-to-hide">
              Welcome, Osamudiamen
            </span>
            <SVG
              className="h-10 relative -top-2 "
              src={'/assets/svg/user-image.svg'}
            ></SVG>
          </a>
        </li>
      </ul>
    </div>
  )
}
