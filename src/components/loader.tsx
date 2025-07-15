import "ldrs/ring";
import { JellyTriangle } from "ldrs/react";
import "ldrs/react/JellyTriangle.css";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <JellyTriangle size="30" speed="1.75" color="black" />
    </div>
  );
};
