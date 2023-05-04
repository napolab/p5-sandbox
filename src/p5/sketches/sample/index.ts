import frag from "./shader.frag?raw";
import vert from "./shader.vert?raw";

import type { Sketch } from "@p5/types";
import type p5 from "p5";

export const sketch: Sketch = (p) => {
  let renderer: p5.Renderer | undefined;
  const resize = () => {
    const parent = renderer?.parent();
    if (!parent || !(parent instanceof HTMLElement)) return;

    const { width, height } = parent.getBoundingClientRect();
    p.resizeCanvas(width, height);
  };
  const getSize = () => {
    const parent = renderer?.parent();
    if (!parent || !(parent instanceof HTMLElement)) return { width: p.width, height: p.height };

    const { width, height } = parent.getBoundingClientRect();

    return { width, height };
  };

  p.windowResized = () => resize();

  p.setup = () => {
    renderer = p.createCanvas(p.width, p.height, p.WEBGL);
    resize();

    const shader = p.createShader(vert, frag);
    p.shader(shader);

    const { width, height } = getSize();
    shader.setUniform("resolution", [width, height]);
    p.quad(-1, -1, -1, 1, 1, 1, 1, -1);
    p.resetShader();
  };
};
