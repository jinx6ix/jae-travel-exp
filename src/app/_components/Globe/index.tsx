'use client'
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import "./index.module.scss";

const FooterGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 0;
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: window.innerWidth,
      height: window.innerHeight,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // Add markers if needed
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      }
    });

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.zIndex = "-1";
      canvas.style.opacity = "1";
    }

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <footer className="footer">
      <canvas ref={canvasRef} />
      <div className="footer-content">
        <p>Footer text</p>
        
      </div>
    </footer>
  );
};

export default FooterGlobe;