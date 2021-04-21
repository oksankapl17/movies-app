import React from 'react';
import './NotFoundPage.module.scss';
import NotFoundImg from '../../assets/page_not_found.jpg';
import {Button} from '../../components/Button/Button';
import withRouter from 'react-router-dom'

 const CN = "not-found-page";

 const NotFoundPage = (props) => {
   const onHomeClick = () => {
     const {history} = props;
     history.push('/');

   }
   return (
     <div className={CN}>
       <img src={NotFoundImg} alt="page not found"/>
       <Button onClick={onHomeClick} lebel="Home"></Button>
     </div>
   )
 };

 export default withRouter(NotFoundPage);
