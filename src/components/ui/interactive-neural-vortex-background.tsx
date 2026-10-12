import React, { useEffect, useRef, useState } from 'react';

export interface InteractiveNeuralVortexProps {
  className?: string;
  opacity?: number;
  interactive?: boolean;
  reducedMotion?: boolean;
}

export const InteractiveNeuralVortexBackground: React.FC<InteractiveNeuralVortexProps> = ({
  className = '',
  opacity = 0.55,
  interactive = true,
  reducedMotion: propReducedMotion = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pointer = useRef({ x: 0, y: 0, tX: 0, tY: 0 });
  const animationRef = useRef<number | null>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    const containerEl = containerRef.current;
    if (!canvasEl || !containerEl) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReducedMotion = propReducedMotion || mediaQuery.matches;

    // Initialize WebGL context
    const gl = (canvasEl.getContext('webgl', { 
      alpha: true, 
      antialias: true, 
      powerPreference: 'default' 
    }) || canvasEl.getContext('experimental-webgl', {
      alpha: true,
      antialias: true
    })) as WebGLRenderingContext | null;

    if (!gl) {
      console.warn('WebGL not supported for Neural Vortex, falling back to CSS background');
      setWebglSupported(false);
      return;
    }

    // Vertex shader
    const vsSource = `
      precision mediump float;
      attribute vec2 a_position;
      varying vec2 vUv;
      void main() {
        vUv = 0.5 * (a_position + 1.0);
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment shader calibrated to Dayflow brand colors (Blue #2563FF, Cyan #06B6D4, Purple #8B5CF6)
    const fsSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform float u_time;
      uniform float u_ratio;
      uniform vec2 u_pointer_position;
      uniform float u_scroll_progress;
      
      vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
      }
      
      float neuro_shape(vec2 uv, float t, float p) {
        vec2 sine_acc = vec2(0.0);
        vec2 res = vec2(0.0);
        float scale = 6.5;
        for (int j = 0; j < 12; j++) {
          uv = rotate(uv, 1.0);
          sine_acc = rotate(sine_acc, 1.0);
          vec2 layer = uv * scale + float(j) + sine_acc - t;
          sine_acc += sin(layer) + 2.2 * p;
          res += (0.5 + 0.5 * cos(layer)) / scale;
          scale *= 1.18;
        }
        return res.x + res.y;
      }
      
      void main() {
        vec2 uv = 0.5 * vUv;
        uv.x *= u_ratio;
        vec2 pointer = vUv - u_pointer_position;
        pointer.x *= u_ratio;
        float p = clamp(length(pointer), 0.0, 1.0);
        p = 0.5 * pow(1.0 - p, 2.0);
        float t = 0.00075 * u_time;
        float noise = neuro_shape(uv, t, p);
        noise = 1.1 * pow(noise, 2.8);
        noise += pow(noise, 8.0);
        noise = max(0.0, noise - 0.45);
        noise *= (1.0 - 0.7 * length(vUv - 0.5));
        
        // Dayflow color palette:
        // Purple #8B5CF6 (0.545, 0.361, 0.965)
        // Primary Blue #2563FF (0.145, 0.388, 1.0)
        // Cyan #06B6D4 (0.024, 0.714, 0.831)
        vec3 colPurple = vec3(0.545, 0.361, 0.965);
        vec3 colCyan = vec3(0.024, 0.714, 0.831);
        vec3 colBlue = vec3(0.145, 0.388, 1.0);
        
        vec3 color = mix(colPurple, colCyan, 0.45 + 0.35 * sin(1.5 * u_scroll_progress + 0.8));
        color = mix(color, colBlue, 0.5 + 0.4 * cos(t * 0.8));
        
        color = color * noise;
        gl_FragColor = vec4(color, clamp(noise * 0.85, 0.0, 1.0));
      }
    `;

    // Shader compilation helper
    const compileShader = (glCtx: WebGLRenderingContext, source: string, type: number): WebGLShader | null => {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.warn('Shader compile error:', glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl, vsSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(gl, fsSource, gl.FRAGMENT_SHADER);

    if (!vertexShader || !fragmentShader) {
      setWebglSupported(false);
      return;
    }

    // Program setup
    const program = gl.createProgram();
    if (!program) {
      setWebglSupported(false);
      return;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('Program link error:', gl.getProgramInfoLog(program));
      setWebglSupported(false);
      return;
    }

    gl.useProgram(program);

    // Quad geometry
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRatio = gl.getUniformLocation(program, 'u_ratio');
    const uPointerPosition = gl.getUniformLocation(program, 'u_pointer_position');
    const uScrollProgress = gl.getUniformLocation(program, 'u_scroll_progress');

    // Resize handler using container bounding dimensions
    let containerWidth = containerEl.clientWidth || window.innerWidth;
    let containerHeight = containerEl.clientHeight || window.innerHeight;

    const resizeCanvas = () => {
      if (!canvasEl || !containerEl) return;
      const rect = containerEl.getBoundingClientRect();
      containerWidth = Math.max(rect.width, 320);
      containerHeight = Math.max(rect.height, 400);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvasEl.width = Math.floor(containerWidth * dpr);
      canvasEl.height = Math.floor(containerHeight * dpr);

      gl.viewport(0, 0, canvasEl.width, canvasEl.height);
      if (uRatio) {
        gl.uniform1f(uRatio, canvasEl.width / canvasEl.height);
      }
    };

    resizeCanvas();
    const resizeObserver = new ResizeObserver(() => resizeCanvas());
    resizeObserver.observe(containerEl);

    // Initial pointer at center
    pointer.current.x = containerWidth * 0.5;
    pointer.current.y = containerHeight * 0.5;
    pointer.current.tX = pointer.current.x;
    pointer.current.tY = pointer.current.y;

    // Animation loop
    const render = (time: number) => {
      if (!gl || !canvasEl) return;

      if (interactive) {
        pointer.current.x += (pointer.current.tX - pointer.current.x) * 0.12;
        pointer.current.y += (pointer.current.tY - pointer.current.y) * 0.12;
      }

      if (uTime) gl.uniform1f(uTime, time);
      if (uPointerPosition) {
        gl.uniform2f(
          uPointerPosition,
          pointer.current.x / Math.max(containerWidth, 1),
          1.0 - pointer.current.y / Math.max(containerHeight, 1)
        );
      }
      if (uScrollProgress) {
        gl.uniform1f(uScrollProgress, window.scrollY / Math.max(window.innerHeight * 2, 1));
      }

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      if (!isReducedMotion) {
        animationRef.current = requestAnimationFrame(render);
      }
    };

    if (isReducedMotion) {
      // Single static frame
      render(1500);
    } else {
      animationRef.current = requestAnimationFrame(render);
    }

    // Pointer listeners relative to container
    const handlePointerMove = (e: PointerEvent) => {
      if (!containerEl || !interactive) return;
      const rect = containerEl.getBoundingClientRect();
      pointer.current.tX = e.clientX - rect.left;
      pointer.current.tY = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerEl || !interactive || !e.touches[0]) return;
      const rect = containerEl.getBoundingClientRect();
      pointer.current.tX = e.touches[0].clientX - rect.left;
      pointer.current.tY = e.touches[0].clientY - rect.top;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Cleanup resources
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      if (gl) {
        if (program) {
          gl.deleteProgram(program);
        }
        if (vertexShader) gl.deleteShader(vertexShader);
        if (fragmentShader) gl.deleteShader(fragmentShader);
        if (vertexBuffer) gl.deleteBuffer(vertexBuffer);
      }
    };
  }, [interactive, propReducedMotion]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {webglSupported ? (
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        /* Fallback CSS gradient in case WebGL is disabled */
        <div className="w-full h-full bg-gradient-to-tr from-blue-100/40 via-cyan-50/30 to-purple-100/40" />
      )}
    </div>
  );
};

export default InteractiveNeuralVortexBackground;
