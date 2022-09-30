import { useState } from "react"
import Solicitudes from "../Solicitudes/Solicitudes"


function paginaSolicitud() {

    const[tasks, setTasks] = useState([
        {
          id: 1,
          text: 'Doctors Appointment',
          day: '5 de febrero 2:30 pm',
          reminder: true,
      },
      {
          id: 2,
          text: 'Meeting at School',
          day: '6 de febrero 1:30 pm',
          reminder: true,
      },
      {
          id: 3,
          text: 'Food Shopping',
          day: '5 de febrero 2:30 pm',
          reminder: false,
      },
      ])

      const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
      }
    
    //toggle Reminder
    
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ?
      {...task, reminder: !task.reminder} : task))
    }

    return(
        <div>
            {tasks.length > 0 ? (
                <Solicitudes tasks={tasks} onDelete={deleteTask} 
                onToggle={toggleReminder} />
            ) : (
                'No Tasks To Show'
            )}
        </div>
    )
}

export default paginaSolicitud