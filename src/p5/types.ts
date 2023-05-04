import type P5 from "p5";

export interface Sketch {
  (p: P5): void;
}
