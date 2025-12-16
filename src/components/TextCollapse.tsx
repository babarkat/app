import React, { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
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

  /* تشخیص overflow عمودی */
  useEffect(() => {
    if (!textRef.current) return;

    const el = textRef.current;
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const maxHeight = lineHeight * maxLines;

    setIsOverflowing(el.scrollHeight > maxHeight);
  }, [text, maxLines]);

  const shouldMarquee =
    enableMarquee && isOverflowing && !expanded;

  return (
    <div className={classNames("tc-wrapper", className)}>
      {shouldMarquee ? (
        <div
          className={classNames("tc-text", textClassName)}
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
        >
          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover
            direction="right" // مناسب RTL
          >
            <span style={{ paddingLeft: 24 }}>{text}</span>
          </Marquee>
        </div>
      ) : (
        <div
          ref={textRef}
          className={classNames("tc-text", textClassName)}
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: expanded ? "unset" : maxLines,
            overflow: "hidden",
            whiteSpace: "pre-line",
            transition: "all 0.3s ease",
          }}
        >
          {text}
        </div>
      )}

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
