import { useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import {
  InfoOverlay,
  MatrixCanvas,
  MatrixWrapper,
} from "../styles/Cmatrix.styled";

/* convert #RGB / #RRGGBB to rgba() with the given alpha */
const hexToRgba = (hex: string, alpha: number): string => {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map(c => c + c).join("");
  const num = parseInt(h, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const GLYPHS =
  "アイウエオカキクケコサシスセソタチツテトﾊﾋﾌﾍﾎ0123456789MAYANKRAJPUT<>/\\{}[]#$%*+=".split(
    ""
  );

const Cmatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // jsdom / unsupported

    const primary = theme?.colors?.primary || "#00ff9c";
    const body = theme?.colors?.body || "#0d1117";
    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];

    const setup = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columns = Math.max(1, Math.floor(canvas.width / fontSize));
      drops = Array(columns)
        .fill(0)
        .map(() => Math.floor((Math.random() * canvas.height) / fontSize));
    };
    setup();

    let raf = 0;
    const draw = () => {
      // translucent fill to create the fading trail
      ctx.fillStyle = hexToRgba(body, 0.08);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        // bright leading glyph, dimmer trail
        ctx.fillStyle = primary;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      raf = window.requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => setup();
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [theme]);

  return (
    <MatrixWrapper data-testid="cmatrix">
      <MatrixCanvas ref={canvasRef} />
      <InfoOverlay>
        <div className="name">MAYANK RAJPUT</div>
        <div className="role">
          SOC Engineer • Exploit Developer • Ethical Hacker
        </div>
        <div className="loc">Gujarat, India</div>
        <div className="hint">type `help` to explore the terminal</div>
      </InfoOverlay>
    </MatrixWrapper>
  );
};

export default Cmatrix;
