import Preloader from '../../common/preloader/preloader';
import s from './Profileinfo.module.css';
import userPhoto from '../../../asets/images/unnamed.png'
import React, { useState } from "react"
import ProfileStatusHook from './ProfileStatusHook';
import ProfileDataFormRedux from './ProfileDataForm';


const Profileinfo = props => {

      let [editMode, setEditMode] = useState(false)


      if (!props.profile) {
            return <Preloader />
      }

      const onMainPhotoSelected = (e) => {
            if (e.target.files.length) {
                  props.savePhoto(e.target.files[0])
            }
      }
      const onSubmit = (formData) => {
            props.saveProfile(formData)
            setEditMode(false)

      }


      return (
            <div>
                  {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                  <ProfileStatusHook status={props.status} updateStatus={props.updateStatus} />
                  <div>
                        <img src={props.profile.photos.large || userPhoto} className={s.fotosProfil} />
                  </div>
                  <div>
                        {editMode
                              ? <ProfileDataFormRedux initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
                              : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}
                  </div>

            </div>
      )

}



const ProfileData = (props) => {
      return (
            <div>
                  {props.isOwner && <div><button onClick={props.goToEditMode}>EDIT</button></div>}
                  <div>
                        <b>Full name</b> :  {props.profile.fullName}

                  </div>
                  <div>
                        <b>Looking for a job</b>:   {props.profile.lookingForAJob ? 'yes' : 'no'}
                  </div>
                  {props.profile.lookingForAJob &&
                        <div>
                              <b>My professional skills</b> : {props.profile.lookingForAJobDescription}
                        </div>}


                  <div>
                        <b>About me</b>:{props.profile.aboutMe}
                  </div>

                  <div>
                        <b>Contacts</b>:{Object.keys(props.profile.contacts).map(key => {
                              return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                        })}
                  </div>

            </div>
      )

}


const Contact = ({ contactTitle, contactValue }) => {
      return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
}
export default Profileinfo;
