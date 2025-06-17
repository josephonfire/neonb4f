import React from "react";
import clsx from "clsx";

/**
 * @typedef {Object} NeonButtonProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 * @property {string} [textColor]
 * @property {string} [borderStartColor]
 * @property {string} [borderEndColor]
 * @property {string} [backgroundColor]
 * @property {object} [style]
 */

/**
 * @param {NeonButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>} props
 */
export function NeonButton({
  children,
  className,
  textColor = "#1670f0",
  borderStartColor = "#0c002b",
  borderEndColor = "#1779ff",
  backgroundColor = "transparent",
  style,
  ...props
}) {
  const buttonStyle = {
    "--border-start": borderStartColor,
    "--border-end": borderEndColor,
    "--text-color": textColor,
    "--bg-color": backgroundColor,
    ...style,
  };
 
  return (
    <a
      className={clsx(
        "relative overflow-hidden px-[60px] py-[30px] text-[30px] uppercase tracking-[5px] no-underline shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
        "bg-[var(--bg-color)] text-[var(--text-color)]",
        className,
      )}
      style={buttonStyle}
      {...props}
    >
      <span className="absolute left-0 top-0 h-[2px] w-full animate-[neonSlideRight_2s_linear_infinite_1s] bg-linear-to-r from-[var(--border-start)] to-[var(--border-end)]" />
      <span className="absolute right-0 top-0 h-full w-[2px] animate-[neonSlideDown_2s_linear_infinite_2s] bg-linear-to-b from-[var(--border-start)] to-[var(--border-end)]" />
      <span className="absolute bottom-0 left-0 h-[2px] w-full animate-[neonSlideLeft_2s_linear_infinite_1s] bg-linear-to-l from-[var(--border-start)] to-[var(--border-end)]" />
      <span className="absolute left-0 top-0 h-full w-[2px] animate-[neonSlideUp_2s_linear_infinite_2s] bg-linear-to-t from-[var(--border-start)] to-[var(--border-end)]" />
      {children}
    </a>
  );
}