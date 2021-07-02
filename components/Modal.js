import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import styles from '@/styles/Modal.module.css'

  // Model work-around for Next
  // Next renders server side, it does not have access to the window.document object
  // In Next, there is no index.html in the root
  // Need to create src/pages/_document to ad the ID, docs: https://nextjs.org/docs/advanced-features/custom-document

export default function Modal({ show, onClose, children, title }) {

  // Create state, set to false until the widow object is available
  const [isBrowser, setIsBrowser] = useState(false)

  // When useEffect runs, the modal is available
  useEffect(() => setIsBrowser(true))

  const handleClose = (e) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <a href='#' onClick={handleClose}>
            <FaTimes />
          </a>
        </div>
        {title && <div>{title}</div>}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      // Accessing the window.document object ID does not exist
      document.getElementById('modal-root')
    )
  } else {
    return null
  }
}

// https://devrecipes.net/modal-component-with-next-js/
