import React, { useEffect, useState } from "react";

/**
 *  FallingLeaves component
 *  Displays falling leaves animation on the screen.
 * 
 * @returns {JSX.Element}
 */
const FallingLeaves = () => {
  // State to hold the leaves
  const [leaves, setLeaves] = useState([]);

  // Function to create a new leaf
  const createLeaf = (x = Math.random() * window.innerWidth, y = -50) => { 
    const id = Date.now() + Math.random();
    const duration = 5 + Math.random() * 5;
    const direction = Math.random() < 0.5 ? "fallLeft" : "fallRight";
  
    setLeaves(prev => [
      ...prev,
      { id, left: x, top: y, duration, rotation: Math.random() * 360, direction }
    ]);

    // Remove leaf after its duration
    setTimeout(() => {
      setLeaves(prev => prev.filter(leaf => leaf.id !== id));
    }, duration * 1000);
  };

  // Auto falling leaves
  useEffect(() => {
    // Create a new leaf every second
    const interval = setInterval(() => {
      createLeaf();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Extra leaves near mouse
  useEffect(() => {
    const handler = (e) => {      
      var numberLeafs = Math.random();
      if (numberLeafs > 0.99) {        
          createLeaf(
            e.clientX + Math.random() * 40 - 20,
            0
          );
        
      }
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // Extra leaves on click
  useEffect(() => {
    let lastClick = 0;
    const handler = (e) => {      
      const now = Date.now();      
      if (now - lastClick < 300){
        lastClick = now;
        return;    
      }
      lastClick = now;
      
      createLeaf(
        e.clientX + Math.random() * 40 - 20,
        e.clientY + Math.random() * 40 - 20
      );            
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  // CSS for falling leaves animation
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      {leaves.map(leaf => (
        <img
          key={leaf.id}
          src="/leaf.svg"
          alt="leaf"
          className="absolute"
          style={{
            left: `${leaf.left}px`,
            top: `${leaf.top}px`,
            width: "30px",
            height: "30px",
            animation: `${leaf.direction} ${leaf.duration}s linear forwards`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingLeaves;