import { Link } from 'react-router-dom'
import styles from './Teacher.module.css'
import DeletedCourses from './DeletedCourses/DeletedCourses'
import ActiveCourses from './ActiveCourses/ActiveCourses'

function Teacher() {

  return (
    <>
      <div className={styles.teacher_container}>
        <div className={styles.teacher_sidebar}>
          <h2>Nombre: </h2>
          <Link to={'/dashboard/teacher/create'} >Crea un curso</Link>
        </div>
        <div className={styles.teacher_courses}>
          <DeletedCourses />
          <ActiveCourses />
        </div>
      </div>
    </>
  )
}

export default Teacher