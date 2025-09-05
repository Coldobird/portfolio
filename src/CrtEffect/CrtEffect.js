import "./CrtEffect.css";

function CrtEffect({ children }) {
  return (
    <crt-container>
      <crt-background></crt-background>
      <crt-grain></crt-grain>
      <crt-content>{children}</crt-content>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <filter id="crt-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            seed="2"
            result="noise"
          >
            <animate
              attributeName="seed"
              from="0"
              to="999"
              dur="8s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
    </crt-container>
  );
}

export default CrtEffect;
