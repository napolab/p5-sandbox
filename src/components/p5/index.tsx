import P5 from "p5";
import { useEffect, useRef, memo, type ComponentPropsWithoutRef, forwardRef } from "react";
import { mergeRefs } from "react-merge-refs";

import type { Sketch } from "@p5/types";

type P5RendererProps = {
  sketch: Sketch;
} & ComponentPropsWithoutRef<"div">;

const P5Renderer = forwardRef<HTMLDivElement, P5RendererProps>(({ sketch, className, style }, external) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;

    const p5 = new P5(sketch, ref.current);

    return () => {
      p5.remove();
    };
  }, [sketch]);

  return <div ref={mergeRefs([ref, external])} className={className} style={style} />;
});

export default memo(P5Renderer);
