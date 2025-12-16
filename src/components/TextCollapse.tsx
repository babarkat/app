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

  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  /* تشخیص overflow عمودی */
  useEffect(() => {
    if (!wrapperRef.current) return;

    const el = wrapperRef.current;
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const maxHeight = lineHeight * maxLines;

    setIsOverflowing(el.scrollHeight > maxHeight);
  }, [text, maxLines]);

  /* marquee animation */
  useEffect(() => {
    if (
      !enableMarquee ||
      !isOverflowing ||
      expanded ||
      !wrapperRef.current ||
      !innerRef.current
    ) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = "translateX(0)";
      }
      return;
    }

    const wrapper = wrapperRef.current;
    const inner = innerRef.current;

    const containerWidth = wrapper.clientWidth;
    const contentWidth = inner.scrollWidth;

    if (contentWidth <= containerWidth) return;

    let x = containerWidth;
    const speed = 0.4; // سرعت اسکرول

    const animate = () => {
      x -= speed;
      inner.style.transform = `translateX(${x}px)`;

      if (x < -contentWidth) {
        x = containerWidth;
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
        ref={wrapperRef}
        className={classNames("tc-text", textClassName)}
        style={{
          overflow: "hidden",
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
          transition: "all 0.3s ease",
        }}
      >
        <div ref={innerRef}>{text}</div>
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
