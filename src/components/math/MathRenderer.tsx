import { useRef, useEffect } from 'react';
import katex from 'katex';

type Props = {
  latex: string;
  display?: boolean;
  className?: string;
};

export function MathRenderer({ latex, display = false, className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      try {
        katex.render(latex, ref.current, {
          displayMode: display,
          throwOnError: false,
          trust: true,
        });
      } catch {
        if (ref.current) {
          ref.current.textContent = latex;
        }
      }
    }
  }, [latex, display]);

  return <span ref={ref} className={className} />;
}
