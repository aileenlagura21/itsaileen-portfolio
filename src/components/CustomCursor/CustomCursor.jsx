/**
 * CustomCursor Component
 * Renders a custom cursor with smooth trailing animation.
 * Optimized with throttling to prevent excessive re-renders.
 */
import { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor({ enabled }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const throttleRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const updatePosition = (e) => {
      // Throttle mouse position updates to avoid excessive re-renders
      if (throttleRef.current) return;
      
      setPosition({ x: e.clientX, y: e.clientY });
      throttleRef.current = true;
      requestAnimationFrame(() => {
        throttleRef.current = false;
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target?.tagName === 'BUTTON' ||
        target?.tagName === 'A' ||
        target?.closest?.('a') ||
        target?.closest?.('button') ||
        target?.classList?.contains?.('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [enabled]);

  // Smooth trailing effect for the larger rings
  useEffect(() => {
    if (!enabled) return;
    let frameId;

    const smoothTrail = () => {
      setRingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Adjust this factor to speed up/slow down the ring trail
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      frameId = requestAnimationFrame(smoothTrail);
    };

    frameId = requestAnimationFrame(smoothTrail);
    return () => cancelAnimationFrame(frameId);
  }, [position, enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        className="custom-cursor-dot hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          scale: isClicking ? 0.6 : isHovering ? 1.6 : 1,
          backgroundColor: isHovering ? '#f25c7e' : '#f25c7e',
        }}
      />
      <div
        className="custom-cursor-ring hidden md:block"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          scale: isClicking ? 1.3 : isHovering ? 0.7 : 1,
          borderColor: isHovering ? '#f25c7e' : 'rgba(242, 92, 126, 0.4)',
          backgroundColor: isHovering ? 'rgba(242, 92, 126, 0.1)' : 'transparent',
        }}
      />
    </>
  );
}
