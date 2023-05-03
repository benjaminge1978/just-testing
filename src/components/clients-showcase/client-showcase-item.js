import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import Modal from "react-modal"
import PropsTyps from "prop-types"
import ReactPlayer from "react-player"
import React, { useState } from "react"

Modal.setAppElement("#___gatsby") // To prevent the accessibility warning
/**
 *
 *
 * @param {*} { title, logo, video, thumb }
 * @returns
 */
const ClientsShowcaseItem = ({ title, logo, video, thumb }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
    document.body.classList.add("lock-scroll")
  }

  const closeModal = () => {
    setModalIsOpen(false)
    document.body.classList.remove("lock-scroll")
  }

  return (
    <Fade bottom cascade distance="70px">
      <div className="case-studies-list-item">
        <>
          <div className="case-studies-list-item__thumb">
            <Fade bottom cascade distance="70px">
              <Img
                fluid={thumb.fluid}
                alt={title}
                className="animated-img-clients"
              />
            </Fade>
            <Fade bottom cascade distance="70px" delay={200}>
              <div className="case-studies-list-item__logo_wrapper">
                <img
                  src={logo.file.url}
                  alt={title}
                  className="case-studies-list-item__logo"
                />
              </div>
            </Fade>
            <Fade bottom cascade distance="70px" delay={320}>
              <div
                className="case-studies-list-item__play_wrapper"
                onClick={openModal}
              >
                <img
                  src="/play.png"
                  alt={title}
                  className="case-studies-list-item__play"
                />
              </div>
            </Fade>
          </div>
          <h2 className="case-studies-list-item__title">
            <p className="animated-title">{title}</p>
          </h2>
        </>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
        shouldCloseOnOverlayClick={true}
      >
        <div className="modal-close" onClick={closeModal}>
          &times;
        </div>
        <div className="react-player-wrapper">
          <ReactPlayer
            url={video.file.url}
            playing={modalIsOpen}
            controls
            width="100%"
            height="100%"
          />
        </div>
      </Modal>
    </Fade>
  )
}

ClientsShowcaseItem.propsTypes = {
  title: PropsTyps.string.isRequired,
  thumbSrc: PropsTyps.string.isRequired,
  thumb: PropsTyps.string.isRequired,
  excerpt: PropsTyps.string.isRequired,
}

export default ClientsShowcaseItem
