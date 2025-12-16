import React, { useState, useEffect, useRef } from "react";
import { classNames } from "@plasmicapp/react-web";
import { CodeComponentMeta } from "@plasmicapp/host";

type TextCollapseProps = {
  text?: string;
  maxLines?: number;
  enableToggle?: boolean;
  enableMarquee?: boolean;

  className?: string;
  textClassName?: string;
  buttonClassName?: string;
};

export const TextCollapse = (props: TextCollapseProps) => {
  const {
    text = "",
    maxLines = 3,
    enableToggle = true,
    enableMarquee = false,
    className,
    textClassName,
    buttonClassName,
  } = props;

  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const textRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const offsetRef = useRef(0);

  // تشخیص overflow عمودی
  useEffect(() => {
    if (!textRef.current) return;

    const el = textRef.current;
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const maxHeight = lineHeight * maxLines;

    setIsOverflowing(el.scrollHeight > maxHeight);
  }, [text, maxLines]);

  // marquee animation
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // شرایط فعال شدن marquee
    const shouldMarquee =
      enableMarquee && isOverflowing && !expanded;

    if (!shouldMarquee) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      el.style.transform = "translateX(0)";
      return;
    }

    const containerWidth = el.parentElement?.clientWidth ?? 0;
    const textWidth = el.scrollWidth;

    if (textWidth <= containerWidth) return;

    offsetRef.current = containerWidth;
    const speed = 0.4; // هرچی کمتر، آروم‌تر

    const animate = () => {
      offsetRef.current -= speed;
      el.style.transform = `translateX(${offsetRef.current}px)`;

      if (offsetRef.current < -textWidth) {
        offsetRef.current = containerWidth;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [enableMarquee, isOverflowing, expanded]);

  return (
    <div className={classNames("tc-wrapper", className)}>
      <div
        ref={textRef}
        className={classNames("tc-text", textClassName)}
        style={{
          overflow: "hidden",
          transition: "all 0.3s ease",
          whiteSpace:
            enableMarquee && isOverflowing && !expanded
              ? "nowrap"
              : "pre-line",
          display:
            enableMarquee && isOverflowing && !expanded
              ? "block"
              : "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp:
            expanded || enableMarquee ? "unset" : maxLines,
        }}
      >
        {text}
      </div>

      {enableToggle && isOverflowing && !enableMarquee && (
        <button
          className={classNames("tc-toggle-btn", buttonClassName)}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "نمایش کمتر" : "نمایش بیشتر"}
        </button>
      )}
    </div>
  );
};

export const TextCollapseMeta: CodeComponentMeta<TextCollapseProps> = {
  name: "TextCollapse",
  importPath: "@/components/TextCollapse",
  props: {
    text: {
      type: "string",
      defaultValue: "متنی که می‌تواند طولانی باشد...",
    },
    maxLines: {
      type: "number",
      defaultValue: 3,
    },
    enableToggle: {
      type: "boolean",
      defaultValue: true,
    },
    enableMarquee: {
      type: "boolean",
      defaultValue: false,
    },
    className: {
      type: "class",
      displayName: "Wrapper Style",
    },
    textClassName: {
      type: "class",
      displayName: "Text Style",
    },
    buttonClassName: {
      type: "class",
      displayName: "Button Style",
    },
  },
};
