import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/action';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  
  Modal.setAppElement('#root');
const EditTask = ({el}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [newText, setNewText] = useState(el.description)
    const dispatch=useDispatch()

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit=(e)=>{
       e.preventDefault();
    const newTask={
      id:el.id,
      description:newText,
      completed:el.completed
    }
    dispatch(editTask(newTask))
    closeModal()
  }

  return (
    <div className='mod'>
<button onClick={openModal}>Edit Task</button>
      <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <input  value={newText} onChange={(e)=>setNewText(e.target.value)}/>
          <button >Confirmer</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  )
}

export default EditTask