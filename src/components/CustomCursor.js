import React, { useEffect, useState, useCallback } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Check if element is interactive
  const isInteractive = useCallback((element) => {
    // Return false if element is null
    if (!element) return false;
    
    const interactiveElements = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'];
    const hasInteractiveRole = element.getAttribute('role') === 'button' || 
                              element.getAttribute('role') === 'link';
    
    // Check if element or any parent is interactive
    let currentElement = element;
    while (currentElement) {
      if (
        interactiveElements.includes(currentElement.tagName) ||
        hasInteractiveRole ||
        currentElement.classList.contains('btn') ||
        currentElement.onclick ||
        window.getComputedStyle(currentElement).cursor === 'pointer'
      ) {
        return true;
      }
      currentElement = currentElement.parentElement;
    }
    return false;
  }, []);

  useEffect(() => {
    // Track if user is using mouse or keyboard/touch
    let usingMouse = false;
    let lastTouchTime = 0;
    
    // Add cursor tracking
    const updateCursorPosition = (e) => {
      // Only update position if using mouse
      if (usingMouse) {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
        
        // Check if hovering over interactive element
        const targetElement = document.elementFromPoint(e.clientX, e.clientY);
        // Only call isInteractive if targetElement exists
        setIsHovering(targetElement ? isInteractive(targetElement) : false);
      }
    };

    // Hide cursor when it leaves the window
    const hideCursor = () => {
      if (usingMouse) {
        setIsVisible(false);
      }
    };
    
    // Handle mouse down/up for click animation
    const handleMouseDown = (e) => {
      // Only respond to mouse events, not touch events
      if (e.pointerType === 'mouse' || (!e.pointerType && Date.now() - lastTouchTime > 500)) {
        setIsClicking(true);
      }
    };
    
    const handleMouseUp = () => {
      if (usingMouse) {
        setIsClicking(false);
      }
    };
    
    // Detect input method
    const handleMouseInput = () => {
      usingMouse = true;
      setIsVisible(true);
    };
    
    const handleKeyboardOrTouchInput = () => {
      usingMouse = false;
      setIsVisible(false);
    };
    
    const handleTouchStart = () => {
      lastTouchTime = Date.now();
      handleKeyboardOrTouchInput();
    };
    
    // Handle focus events (keyboard navigation)
    const handleFocusIn = (e) => {
      // If focus was triggered by keyboard, hide the cursor
      if (!usingMouse) {
        setIsVisible(false);
      }
    };
    
    // Check for click events that weren't triggered by mouse
    const handleClick = (e) => {
      // If it's not a mouse event (e.g., keyboard Enter key or touch)
      if (!e.clientX && !e.clientY) {
        usingMouse = false;
        setIsVisible(false);
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseout', hideCursor);
    window.addEventListener('mouseleave', hideCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseInput);
    window.addEventListener('keydown', handleKeyboardOrTouchInput);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('focusin', handleFocusIn);
    window.addEventListener('click', handleClick);

    // Add cursor:none to both html and body
    document.documentElement.classList.add('custom-cursor-active');
    document.body.classList.add('custom-cursor-active');
    
    // Apply inline styles to override any potential CSS
    const applyGlobalCursorOverride = () => {
      const styleElement = document.createElement('style');
      styleElement.id = 'cursor-override-styles';
      styleElement.textContent = `
        * { cursor: none !important; }
        *:hover { cursor: none !important; }
      `;
      document.head.appendChild(styleElement);
    };
    
    applyGlobalCursorOverride();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseout', hideCursor);
      window.removeEventListener('mouseleave', hideCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseInput);
      window.removeEventListener('keydown', handleKeyboardOrTouchInput);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('focusin', handleFocusIn);
      window.removeEventListener('click', handleClick);
      document.documentElement.classList.remove('custom-cursor-active');
      document.body.classList.remove('custom-cursor-active');
      
      const styleElement = document.getElementById('cursor-override-styles');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    };
  }, [isInteractive]);

  return (
    <>
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0
        }}
      >
        {/* Hexagram Star */}
        <div className="cursor-star">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2L9.1 9.1 2 12l7.1 2.9L12 22l2.9-7.1L22 12l-7.1-2.9z"/>
            <path d="M12 0L8.5 8.5 0 12l8.5 3.5L12 24l3.5-8.5L24 12l-8.5-3.5z"/>
          </svg>
        </div>
        
        {/* Circular Text */}
        <div className="cursor-text">
          <svg viewBox="0 0 100 100">
            <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,0 74,0 a 37,37 0 1,0 -74,0" fill="transparent" />
            <text width="100%">
              <textPath xlinkHref="#curve" fill="white" fontSize="8">
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      
      {/* Design by footer */}
      <div className="design-by-footer">
        Design by Wei Han 2025
      </div>
    </>
  );
};

export default CustomCursor;
