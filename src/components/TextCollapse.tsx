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
  const measureRef = useRef<HTMLDivElement>(null);

  /* تشخیص overflow عمودی */
  useEffect(() => {
    if (!measureRef.current) return;

    const el = measureRef.current;
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const maxHeight = lineHeight * maxLines;

    setIsOverflowing(el.scrollHeight > maxHeight);
  }, [text, maxLines]);

  const shouldMarquee =
    enableMarquee && isOverflowing && !expanded;

  return (
    <div className={classNames("tc-wrapper", className)}>
      {/* Hidden measure element */}
      <div
        ref={measureRef}
        className={classNames("tc-text", textClassName)}
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          whiteSpace: "pre-line",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: maxLines,
          overflow: "hidden",
        }}
      >
        {text}
      </div>

      {shouldMarquee ? (
        <div
          className={classNames("tc-text", textClassName)}
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <Marquee
            direction="left"   // راست → چپ
            speed={40}
            pauseOnHover
            gradient={false}
            autoFill           // 🔥 حذف فاصله خالی
          >
            <span style={{ paddingInlineEnd: 32 }}>
              {text}
            </span>
          </Marquee>
        </div>
      ) : (
        <div
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
      defaultValue: "این یک متن فارسی طولانی است که باید اسکرول شود",
    },
    maxLines: {
      type: "number",
      defaultValue: 1,
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
