import './App.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Unity from './assets/Img/Unity.png';
import Unreal from './assets/Img/unreal-engine.png';
import CPP from './assets/Img/C++.png';
import CS from './assets/Img/CS.png';
import C from './assets/Img/C.png';
import Java from './assets/Img/Java.png';
import React from './assets/Img/React.png';
import Python from './assets/Img/Python.png';
import { useI18n } from './i18n/useI18n.js';

function Competences() {
  const { t } = useI18n();

  return (
   <>
     <div id="competences" className="d-flex justify-content-center align-items-center flex-column padding-part">
       <p className="roboto-400 title-competences title-color">{t('skills.title')}</p>
     </div>
     <Container className="competences-container">
       <Row className="justify-content-center">
         <Col md={4} className="justify-content-center align-items-center d-flex">
           <div className="d-flex flex-column align-items-center">
             <p className="text-competences roboto-400 title-color">{t('skills.engines')}</p>
             <div className="d-flex justify-content-center">
               <Image src={Unity} className="image-competences" />
               <Image src={Unreal} className="image-competences" />
             </div>
           </div>
         </Col>
         <Col md={4} className="justify-content-center align-items-center d-flex">
           <div className="d-flex flex-column align-items-center">
             <p className="text-competences roboto-400 title-color">{t('skills.mainLanguages')}</p>
             <div className="d-flex justify-content-center">
               <Image src={CS} className="image-competences" />
               <Image src={CPP} className="image-competences" />
             </div>
           </div>
         </Col>
         <Col md={4} className="justify-content-center align-items-center d-flex">
           <div className="d-flex flex-column align-items-center">
             <p className="text-competences roboto-400 title-color">{t('skills.secondaryLanguages')}</p>
             <div className="d-flex justify-content-center">
               <Image src={C} className="image-competences" />
               <Image src={Java} className="image-competences" />
               <Image src={Python} className="image-competences" />
               <Image src={React} className="image-competences" />
             </div>
           </div>
         </Col>
       </Row>
     </Container>
   </>
  );
}

export default Competences;
