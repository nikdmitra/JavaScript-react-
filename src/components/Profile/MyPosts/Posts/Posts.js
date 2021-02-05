import s from './Posts.module.css';

      
const Posts =(props)=> {

  
      return (         
      
      

      < div className={s.foto}>
          <img  src='https://i01.fotocdn.net/s122/a636fb8128c2c525/user_xl/2784026303.jpg'/>
          {props.message}
        <div className={s.slo}>
          
          <span>like</span>
          {props.like}
        </div>
        
      
      
      </div>
      );


    




}



export default Posts;
