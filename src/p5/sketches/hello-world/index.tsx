import frag from "./shader.frag?raw";
import vert from "./shader.vert?raw";

import type { Sketch } from "@p5/types";
import type p5 from "p5";

export const sketch: Sketch = (p) => {
  let renderer: p5.Renderer | undefined;

  const getSize = () => {
    const parent = renderer?.parent();
    if (!parent || !(parent instanceof HTMLElement)) return { width: p.width, height: p.height };

    const { width, height } = parent.getBoundingClientRect();

    return { width, height };
  };
  const resize = () => {
    const { width, height } = getSize();
    p.resizeCanvas(width, height);
  };

  p.windowResized = () => resize();

  p.setup = () => {
    renderer = p.createCanvas(p.width, p.height, p.WEBGL);
    resize();
    const shader = p.createShader(vert, frag);
    p.shader(shader);
    p.quad(-1, -1, -1, 1, 1, 1, 1, -1);
    p.resetShader();
  };

  p.draw = () => {
    const shader = p.createShader(vert, frag);
    p.shader(shader);

    shader.setUniform("u_time", p.frameCount / 60);

    const { width, height } = getSize();
    shader.setUniform("u_resolution", [width, height]);

    const mx = p.map(p.mouseX, 0, width, -0.5, 0.5);
    const my = p.map(p.mouseY, 0, height, -0.5, 0.5);
    shader.setUniform("u_mouse", [mx, my]);

    p.quad(-1, -1, -1, 1, 1, 1, 1, -1);
    p.resetShader();
  };
};
