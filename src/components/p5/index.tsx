import P5 from "p5";
import { useEffect, useRef, type FC, memo, type ComponentPropsWithoutRef } from "react";

import type { Sketch } from "@p5/types";

type P5RendererProps = {
  sketch: Sketch;
} & ComponentPropsWithoutRef<"div">;

const P5Renderer: FC<P5RendererProps> = ({ sketch, className, style }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;

    const p5 = new P5(sketch, ref.current);

    return () => {
      p5.remove();
    };
  }, [sketch]);

  return <div ref={ref} className={className} style={style} />;
};

export default memo(P5Renderer);
