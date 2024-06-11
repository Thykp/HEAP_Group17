import { useState } from 'react';
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Make sure to bind modal to your appElement

const Benefits = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', text: '' });

  const openModal = (title, text) => {
    setModalContent({ title, text });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent({ title: '', text: '' });
  };

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Workout Smarter, Not Harder with WorkoutWise"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5 pointer-events-auto text-color-1">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3 pointer-events-auto text-n-1">{item.text}</p>
                <div className="flex items-center mt-auto cursor-pointer pointer-events-auto" onClick={() => openModal(item.title, item.moreText)}>
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-color-5 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="More Information"
          className="fixed inset-0 flex items-center justify-center z-50"
          overlayClassName="fixed inset-0 bg-n-8 bg-opacity-75 z-40"
        >
          <div className="bg-n-7 p-8 rounded-lg max-w-lg w-full border-2 border-color-1">
            <h2 className="text-2xl font-bold mb-4 text-color-1">{modalContent.title}</h2>
            <p className="text-lg text-n-1">{modalContent.text}</p>
            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-color-5 text-n-1 rounded hover:bg-color-5-dark"
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </Section>
  );
};

export default Benefits;
