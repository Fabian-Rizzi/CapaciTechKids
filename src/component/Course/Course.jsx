import { useState } from 'react'
import Estrella from '../Estrella/Estrella';
import style from '../course/Course.module.css'
import { Link } from 'react-router-dom';
export default function Course(props) {


  const { Title, Description, Category, Image, Score, PK_Course } = props
  console.log(PK_Course)


  const [isFav, setIsFav] = useState(false);
  //const dispatch = useDispatch();
  //const myFavorites = useSelector((s) => s.myFavorites);


  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      //dispatch(deleteFavorites(ch.id));
    } else {
      setIsFav(true);
      //dispatch(addFavorites(ch));
    }
  }



  return (
    <div className={style.cont}>
      <div className={style.left}>
        <img className={style.img} src={Image} alt={Image} />
      </div>
      <div className={style.right}>
        <div className={style.inf}>
          <div className={style.upbar_card}>
            {isFav ? (
              <button onClick={() => handleFavorite()}>❤️</button>
            ) : (
              <button onClick={() => handleFavorite()}>🤍</button>
            )}

            <button className={style.bttn} onClick={props.onClose}>X</button>
          </div>

          <div>
            <img className={style.img} src={Image} alt={Image} />
            <h3>{Title}</h3>
            <h4>{Category.slice(" ")}</h4>
            <Estrella Score={Score} />
            <h4>Descripcion: <br />{Description}</h4>
            <Link to={`/detail/${PK_Course}`}><button>Study</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}