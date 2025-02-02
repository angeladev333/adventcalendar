import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/modal';
import './OverlayBox.css';

// TODO: add animation
const OverlayBox = ({ dayNumber, title, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Image paths
  const idleImage = `/imgs/days/Day${dayNumber}_Idle.png`;
  const hoverImage = `/imgs/days/Day${dayNumber}_Hover.png`;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <img
        src={isHovered || isOpen ? hoverImage : idleImage}
        alt={`${title}`}
        className={`cursor-pointer transition-image ${
          isHovered ? 'hovered' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsOpen((prev) => !prev)}
      ></img>

      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        backdrop="blur"
        classNames={{
          backdrop: 'bg-[#8174A0]/50',
          base: 'bg-[#441752] text-white min-w-[68%] min-h-[68%]',
          header: 'border-b border-[#8174A0]',
          body: 'py-6',
        }}
        size="4xl"
        radius="lg"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-xl p-6">{title}</ModalHeader>
              <ModalBody className="text-lg">{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default OverlayBox;
