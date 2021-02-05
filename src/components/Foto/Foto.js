
import s from './Foto.module.css';

const Foto = (props) => {
    return (
        <div className={s.header}>
            <h1 className={s.headerFoto}>Твои фотографии</h1>

            <div className={s.fotoFlex}>
                <img className={s.foto} src='https://avatars.mds.yandex.net/get-zen_doc/1108048/pub_5bd1b3be6b4c0f00aa282ed4_5bd1b4cb32ca1500aac60c95/scale_1200' />
                <img className={s.foto} src='https://img-fotki.yandex.ru/get/104595/13826504.a3/0_11d88f_a6536d45_XL.jpg' />
                <img className={s.foto} src='https://www.zastavki.com/pictures/1920x1200/2011/Movies_Movies_P_Pirates_of_the_Caribbean_4_030091_.jpg' />
                <img className={s.foto} src='https://look.com.ua/pic/201209/1152x864/look.com.ua-4623.jpg' />
            </div>
            <h2 className={s.headerFoto}>Лучшие фото</h2>
            <img className={s.fotoTop} src='https://im0-tub-by.yandex.net/i?id=328d2510e2ce57d1d3f33b4ce7ca6935&n=13' />
            <img className={s.fotoTop} src=' https://argumenti.ru/images/arhnews/590052.JPG' />
        </div>
    );
}

export default Foto;