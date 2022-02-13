import React,{useState} from 'react'
import Modal from 'react-modal'

const Jobdes = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <Modal isOpen={modalIsOpen}>
                <h1>ReactJs Developer</h1>
                <h2>Bangalore, Karnataka</h2>
                <h1>Job Details</h1>
                <h3>Job Type</h3>
                <p>Full-time</p>
                <p>Regular Permanent</p>
                <h3>Number of hires for this role</h3>
                <p>On-going need to fill this role</p>
            </Modal>
        </div>
    )
}

export default Jobdes