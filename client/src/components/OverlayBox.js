import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/modal';

// TODO: add animation on hover motion
const OverlayBox = ({ dayNumber, children }) => {
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
        alt={`Day ${dayNumber}`}
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsOpen((prev) => !prev)}
      ></img>

      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        backdrop="blur"
        classNames={{
          backdrop: 'bg-[#004d40]/50',
          base: 'bg-[#1B1B1B] text-white',
          header: 'border-b border-[#004d40]',
          body: 'py-6',
        }}
        size="4xl"
        radius="lg"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Day {dayNumber}</ModalHeader>
              <ModalBody>
                <p>Hello!</p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default OverlayBox;
