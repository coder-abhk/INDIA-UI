const NavigateButton = () => {
  return (
    <>
      <svg
        id="navigate_btn"
        width="100"
        height="100"
        viewBox="0 0 136 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="68" cy="68" r="50" fill="white" />
        <circle
          id="arrow_"
          r="3"
          transform="matrix(1 0 0 -1 68 68)"
          fill="black"
        />
        <circle
          id="outer_circle"
          cx="68"
          cy="68"
          r="67.5"
          stroke="white"
          strokeDasharray="1 10"
        />
      </svg>
    </>
  );
};

export default NavigateButton;
