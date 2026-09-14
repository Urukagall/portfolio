import './App.css';
import Image from 'react-bootstrap/Image';
import PhotoProfile from './assets/Img/PhotoProfile.png';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { useI18n } from './i18n/useI18n.js';

function AProposDeMoi() {
  const { t } = useI18n();

  return (
   <>
     <h3 id="about" className="text-center title-propos roboto-400 title-color padding-part">
       {t('about.title')}
     </h3>
     <Container>
       <Row>
         <Col md={{ span: 4, offset: 2 }} className="justify-content-center align-items-center d-flex">
           <Image src={PhotoProfile} rounded className="image-propos" />
         </Col>
         <Col md={4} className="text-propos">
           <p className="roboto-400 text-color">{t('about.description')}</p>
         </Col>
       </Row>
     </Container>
   </>
  );
}

export default AProposDeMoi;
