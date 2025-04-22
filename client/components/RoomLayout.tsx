import React from "react";

// Define props, including `children`
interface RoomProps {
  className?: string;
  children?: React.ReactNode; // Accept children
}

const RoomLayout: React.FC<RoomProps> = ({ className, children }) => {
  return (
    <div className={`room ${className}`}>
      {children}
    </div>
  );
};

export default RoomLayout;
