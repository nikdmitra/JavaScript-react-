import { NavLink } from 'react-router-dom';
import s from './Dialogitem.module.css';

const Dialogitem = (props:any) => {

  let path = '/Сообщения/' + props.id;
  return (<div className={s.dialog}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
  );

}

export default Dialogitem;