/* Shared building blocks — image with caption tag, scroll reveal, parallax */

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react';
import type { ImgTag } from '../types';

// ===== Real image with caption tag =====
interface ImgProps {
  src: string;
  alt?: string;
  tag?: ImgTag;
  ratio?: string;
  dark?: boolean;
  className?: string;
  tagPos?: 'tl' | 'br';
}

export function Img({
  src,
  alt = '',
  tag,
  ratio,
  dark = false,
  className = '',
  tagPos = 'tl',
}: ImgProps) {
  return (
    <div
      className={`img-wrap ${dark ? 'dark' : ''} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <img src={src} alt={alt} loading="lazy" />
      {tag && (
        <div
          className={`img-tag ${tagPos === 'br' ? 'br' : 'tl'}`}
          style={tagPos === 'tl' ? { top: 20, left: 20 } : { bottom: 20, right: 20 }}
        >
          {tag.num && <span className="num">{tag.num}</span>}
          <span className="lab">{tag.label}</span>
        </div>
      )}
    </div>
  );
}

// ===== Reveal on scroll =====
interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  mode?: 'fade' | 'img';
  [key: string]: unknown;
}

export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  mode = 'fade',
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cls = `${mode === 'img' ? 'reveal-img' : 'reveal'} ${visible ? 'in' : ''} ${className}`;

  return (
    <Tag
      ref={ref}
      className={cls}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// ===== Parallax =====
interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.1, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const winH = window.innerHeight;
        const center = rect.top + rect.height / 2;
        const offset = (center - winH / 2) * -speed;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' } as CSSProperties}>
      {children}
    </div>
  );
}
