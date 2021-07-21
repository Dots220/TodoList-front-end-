import Modal from '@material-ui/core'
import { useState } from 'react'

function ModalWindow() {
   const [showModal, setShowModal] = useState()

   return (
      <Modal open={showModal}>
         <div onClick={() => setShowModal(false)}>some</div>
      </Modal>
   )
}
