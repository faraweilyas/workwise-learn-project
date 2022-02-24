import { useState, useEffect, Children } from 'react'
import SVG from 'react-inlinesvg'

export default function Modal({
  showmodal,
  modalHandler,
  children,
  width,
  title,
}) {
  return (
    <div className={`modal  ${showmodal ? 'modal--active ' : ''}`}>
     <div className="middle">
     <div className="modal--content" style={{ width: width ? width : 'auto' }}>
        {/*  */}

        <h2 className="absolute top-1  m-5 font-BwN--bold ml-8 modal--close cursor-pointer" onClick={modalHandler}>
          <span className='mr-2 '>&#10094;</span>{title}</h2>
        <button className="modal--close m-5 mb-0 p-2" onClick={modalHandler}>
          <SVG src="/svg/close.svg"></SVG>
        </button>

        <div className="w-full p-5 flex flex-col  justify-between">
          {children}
        </div>

        {/*  */}
      </div>
     </div>
    </div>
  )
}
