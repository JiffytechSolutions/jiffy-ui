import React, { useRef } from 'react'
import PortalComponent from '../../../../utilities/PoratalComponent'
import './Modal.css'

interface ModalI {
  isOpen?: boolean,
  onClose?: () => void
  content?: React.ReactNode
}

const Modal = ({ isOpen = false, onClose = () => { }, content = '' }: ModalI) => {

  const modalRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {
        isOpen && (
          <PortalComponent>
            <div className='inte-timePicker__modal' ref={modalRef}>
              {
                content
              }
            </div>
            <div onClick={onClose} className="inte-timePicker__modal__backdrop" />
          </PortalComponent>
        )
      }
    </>
  )
}

export default Modal
