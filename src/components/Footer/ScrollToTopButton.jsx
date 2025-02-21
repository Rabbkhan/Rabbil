import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const ScrollToTopButton = () => {
  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <div>
      {/* Button to trigger scroll to top */}
      <button onClick={scrollToTop} style={styles.button}>
        <ArrowCircleUpIcon style={{ fontSize: 50 }} /> {/* Increased icon size */}
      </button>
    </div>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    height: '65px',
    width: '65px', // Adjusting width to match the height for a perfect circle
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000, // Ensure it's above other elements
  },
};

export default ScrollToTopButton;
