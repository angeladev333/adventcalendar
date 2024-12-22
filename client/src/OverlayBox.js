import React, { useState } from 'react';

const OverlayBox = ({ dayNumber }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Image paths
  const idleImage = `/imgs/days/Day${dayNumber}_Idle.png`;
  const hoverImage = `/imgs/days/Day${dayNumber}_Hover.png`;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => {
    setIsClicked(true);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsClicked(false);
    setIsModalOpen(false);
  };

  return (
    <>
      <img
        src={isHovered || isClicked ? hoverImage : idleImage}
        alt={`Day ${dayNumber}`}
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      ></img>
    </>
  );
};

export default OverlayBox;
