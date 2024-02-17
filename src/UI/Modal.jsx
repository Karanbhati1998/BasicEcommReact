import React from 'react'
import {createPortal} from 'react-dom'
import style from  "./Modal.module.css"
function Modal({children,removeModal}) {
  return createPortal(
    <>
    <div onClick={removeModal } className={style.modal}> </div>
       <div className={style.modalContent}>
        {children}
      
        </div>
    </>,
    document.getElementById('newRoot')
  )
}

export default Modal