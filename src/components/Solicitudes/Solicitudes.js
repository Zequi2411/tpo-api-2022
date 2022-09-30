import Solicitud from "./Solicitud"

const Solicitudes = ({ tasks, onDelete, onToggle }) => {
  return (
  
    <>
     {tasks.map((task) => (
        <Solicitud key={task.id} task={task} 
        onDelete={onDelete} onToggle={onToggle} />
     ))} 
    </>
  )
}
  


export default Solicitudes