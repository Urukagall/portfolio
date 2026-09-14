import React, { useMemo } from 'react';
import './App.css';
import { Badge, Button, Col, Modal } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Portal from './assets/Img/Portal.jpg';
import UCave from './assets/Img/UCave.png';
import GetOut from './assets/Img/GetOut.png';
import StoneEngine from './assets/Img/StoneEngine.png';
import CiteDesPixels from './assets/Img/Cite_Des_Pixels.png';
import StarCluster from './assets/Img/StarCluster.png';
import StealSimulator from './assets/Img/Steal_Simulator.png';
import FFTPNG from './assets/Img/FFT.png';
import { useI18n } from './i18n/useI18n.js';

function ProjectModal({ show, onHide, title, videoUrl, bodyText, linkUrl, linkLabel }) {
  const { t } = useI18n();

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-white">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="text-white modal-text">{bodyText}</p>

        {linkUrl && (
          <div className="text-center">
            <a href={linkUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              {linkLabel}
            </a>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>{t('projects.close')}</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ProjectCard({ title, image, description, onClick, tags = [] }) {
  return (
    <div className="card-custom" onClick={onClick}>
      <div className="info-project">
        <div className="title-project">
          <h3>{title}</h3>
          <div>
            {tags.map((tag, idx) => (
              <Badge className="tag-project" key={`${title}-${tag}-${idx}`}>
                <span className="tag-project-text">{tag}</span>
              </Badge>
            ))}
          </div>
        </div>
        {image && <Image src={image} rounded className="image-project" />}
        <p className="title-color">{description}</p>
      </div>
    </div>
  );
}

function Project() {
  const { t } = useI18n();
  const projectData = useMemo(
    () => [
      {
        id: 'uCave',
        year: '2021',
        title: t('projects.uCave.title'),
        image: UCave,
        description: t('projects.uCave.cardDescription'),
        tags: ['Unity', 'C#', 'Game Jam'],
        videoUrl: 'https://www.youtube.com/embed/UEWFQm2KxMc?si=UPee3ohxpmHM7O0D',
        bodyText: t('projects.uCave.modalText'),
        linkUrl: 'https://rouesoify.itch.io/u-cave',
        linkLabel: t('projects.itch'),
      },
      {
        id: 'getOut',
        year: '2022',
        title: t('projects.getOut.title'),
        image: GetOut,
        description: t('projects.getOut.cardDescription'),
        tags: ['Unity', 'C#', 'Game Jam'],
        videoUrl: 'https://www.youtube.com/embed/ISxT3MShTyI?si=RDNnanOW_vlL6R2W',
        bodyText: t('projects.getOut.modalText'),
        linkUrl: 'https://urukagall.itch.io/get-out',
        linkLabel: t('projects.itch'),
      },
      {
        id: 'stoneEngine',
        year: '2024',
        title: t('projects.stoneEngine.title'),
        image: StoneEngine,
        description: t('projects.stoneEngine.cardDescription'),
        tags: ['C++', 'DirectX12'],
        videoUrl: 'https://www.youtube.com/embed/n8-n-MbZwqA?si=gzma0CjA6WUcNdGj',
        bodyText: t('projects.stoneEngine.modalText'),
      },
      {
        id: 'citeDesPixels',
        year: '2024',
        title: t('projects.citeDesPixels.title'),
        image: CiteDesPixels,
        description: t('projects.citeDesPixels.cardDescription'),
        tags: ['Java', 'Minecraft', 'Caritatif'],
        videoUrl: 'https://www.youtube.com/embed/eDzhL51SYHs?si=gFiY5jUBX_Oz6_SJ',
        bodyText: t('projects.citeDesPixels.modalText'),
        linkUrl: 'https://citedespixels.fr',
        linkLabel: t('projects.site'),
      },
      {
        id: 'portal',
        year: '2025',
        title: t('projects.portal.title'),
        image: Portal,
        description: t('projects.portal.cardDescription'),
        tags: ['Unreal', 'Blueprint'],
        videoUrl: 'https://www.youtube.com/embed/SPqimDlyaas?si=a991C1xouLE1SrNE',
        bodyText: t('projects.portal.modalText'),
      },
      {
        id: 'starCluster',
        year: '2025',
        title: t('projects.starCluster.title'),
        image: StarCluster,
        description: t('projects.starCluster.cardDescription'),
        tags: ['Unity', 'Mobile'],
        videoUrl: 'https://www.youtube.com/embed/r7vRVnPHQjg?si=CXIa8nu5HWK2mzYI',
        bodyText: t('projects.starCluster.modalText'),
      },
      {
        id: 'fft',
        year: '2025',
        title: t('projects.fft.title'),
        image: FFTPNG,
        description: t('projects.fft.cardDescription'),
        tags: ['Unity', 'IA'],
        videoUrl: 'https://www.youtube.com/embed/Gr52DT-drLg?si=YxxbCRCbK2UVkxNq',
        bodyText: t('projects.fft.modalText'),
      },
      {
        id: 'stealSimulator',
        year: '2025',
        title: t('projects.stealSimulator.title'),
        image: StealSimulator,
        description: t('projects.stealSimulator.cardDescription'),
        tags: ['Unreal', 'Blueprint'],
        videoUrl: 'https://www.youtube.com/embed/B6lMD2aai4w?si=PDBHz_MDiIW4ioJi',
        bodyText: t('projects.stealSimulator.modalText'),
        linkUrl: 'https://urukagall.itch.io/steal-simulator',
        linkLabel: t('projects.itch'),
      },
    ],
    [t],
  );

  const [selectedProject, setSelectedProject] = React.useState(null);

  return (
    <>
      {projectData.map((project) => (
        <ProjectModal
          key={`${project.id}-modal`}
          show={selectedProject?.id === project.id}
          onHide={() => setSelectedProject(null)}
          title={project.title}
          videoUrl={project.videoUrl}
          bodyText={project.bodyText}
          linkUrl={project.linkUrl}
          linkLabel={project.linkLabel}
        />
      ))}

      <div id="projet" className="d-flex justify-content-center align-items-center flex-column padding-part">
        <p className="roboto-400 title-competences title-color">{t('projects.sectionTitle')}</p>
      </div>

      <Col md={{ span: 6, offset: 3 }}>
        <div className="timeline">
          <div className="outer">
            {projectData.map((project) => (
              <React.Fragment key={project.id}>
                <p className="date-timeline">{project.year}</p>
                <ProjectCard
                  title={project.title}
                  image={project.image}
                  description={project.description}
                  onClick={() => setSelectedProject(project)}
                  tags={project.tags}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </Col>
    </>
  );
}

export default Project;
