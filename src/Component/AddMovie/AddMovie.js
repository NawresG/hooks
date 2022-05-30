import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Modal } from 'react-bootstrap';
 const AddMovie = ({getNewMovie}) => {
     const [show,setShow] = useState(false);
     const [newMovie,setNewMovie]= useState({
         "title":"",
         "description":"",
         "posterUrl":"",
         "rating":0,

     });
     const handleClick = () =>{
         if (newMovie.title){
             getNewMovie(newMovie);

             setNewMovie({
                 "title":"",
                 "description":"",
                 "posterUrl":"",
                 "rating":0,
        
             });
             handleClose()
         } else{
             alert("title is required")
         }
     }
     const handleChange=(e)=>{
setNewMovie({...newMovie,[e.target.name]:e.target.value})
     }
     const handleClose =() => setShow(false);
     const handleShow = ()=>setShow(true);
  return (
    <div><>
    <button variant="primary" onClick={handleShow}>Add Movie</button>

    <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <input type="text" name='title' placeholder='title'  onChange={handleChange}/>
  <input type="text" placeholder='desc' name='description' onChange={handleChange} />
  <input type="url" placeholder='url' name='posterUrl' onChange={handleChange} />
  <input type="number" placeholder='rate'  name='rating' onChange={handleChange}/>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    <Button variant="primary" onClick={() => {getNewMovie(newMovie); handleClose()}}>Save changes</Button>
  </Modal.Footer>
</Modal></>
</div>
  )
}
export default AddMovie