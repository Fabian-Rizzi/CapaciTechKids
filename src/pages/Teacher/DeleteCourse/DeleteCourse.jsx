import styles from './DeleteCourse.module.css'
import { FaRegClock, FaThLarge } from "react-icons/fa";
import { TeacherCoursesContext } from '../../../context/TeacherCoursesContext'
import axios from 'axios';
import { useContext } from 'react';


export default function DeleteCourse(props) {
  const { setTeacherCourses, teacherCourses } = useContext(TeacherCoursesContext)
  const { Title, Description, Image, Score, PK_Course, Duration } = props


  const handleActivate = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3001/courses/detail/${id}/activate`)
      console.log(response);
      const activeCourses = await axios.get('http://localhost:3001/courses/')
      const deletedCourses = await axios.get('http://localhost:3001/courses/deleted')
      setTeacherCourses({
        deletedCourses: deletedCourses.data,
        activeCourses: activeCourses.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.card}>
      <button onClick={() => handleActivate(PK_Course)}>x</button>
      <img className={styles.img} src={Image} alt={Image} />
      <div className={styles.coursedet}>
        <div className={styles.similar1}>
          <FaThLarge />
          {/* <h4>{tblCategories[0].Name}</h4> */}
        </div>
        <div className={styles.similar2}>
          <FaRegClock />
          <h4>{Duration / 3600}h</h4>
        </div>
      </div>
      <div className={styles.cardtit}><h1>{Title}</h1></div>
      <h3>{Description}</h3>
      <div className={styles.teach}>
        <img src="..\img\image 12.png" alt="perfil" />
        {/* <h3>{tblUser.Name}</h3> */}
        <div className={styles.btndetail}>
        </div>
      </div>
    </div>
  )
}