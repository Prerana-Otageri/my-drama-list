import TickIcon from "./TickIcon"
import ProgreeBar from "./ProgressBar"
import { useState } from "react";
import Modal from "./Modal";


const ListItem = ({task, getData}) => {
  const [showModal, setShowModal] = useState(false)

  const deleteItem = async() => {
    try{
      const response = await fetch (`http://localhost:8000/mydrama/${task.id}`,{
        method:'DELETE'
      })
      if (response.status === 200)
      {
        getData()
      }
    }catch(err){
      console.log(err)
    }
  }

    return (
      <li className="list-item">
        <div className="info-container">
          <TickIcon/>
          <p className="task-title">{task.title}</p>
          <ProgreeBar progress = {task.progress}/>
        </div>
        
        <div className="button-container">
          <button className="edit" onClick={() => setShowModal(true)}>EDIT</button>
          <button className="delete" onClick={deleteItem}>DELETE</button>
        </div>
        {showModal && <Modal mode={'edit'} setShowModal={setShowModal} getData={getData} task={task}/>}

      </li>
    );
  }
  
  export default ListItem;
  