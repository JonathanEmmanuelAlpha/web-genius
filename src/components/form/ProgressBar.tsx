import React from "react";
import styles from "./ProgressBar.module.css";

function ProgressBar({
  size = 150,
  progress,
  trackWidth = 10,
  trackColor = "#ddd",
  indicatorWidth = 10,
  indicatorColor = "var(--primary-color)",
  indicatorCap = "round",
  label = "Loading...",
  labelColor = "#333",
  spinnerMode,
  spinnerSpeed = 1,
}: {
  size?: number;
  progress: number;
  trackWidth?: number;
  trackColor?: string;
  indicatorWidth?: number;
  indicatorColor?: string;
  indicatorCap?: "round" | "inherit" | "butt" | "square" | undefined;
  label?: string;
  labelColor?: string;
  spinnerMode: boolean;
  spinnerSpeed?: number;
}) {
  const center = size / 2,
    radius =
      center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - progress) / 100);

  let hideLabel = size < 100 || !label.length || spinnerMode ? true : false;

  return (
    <div
      className={styles.svg_pi_wrapper}
      style={{ width: size, height: size }}
    >
      <svg className={styles.svg_pi} style={{ width: size, height: size }}>
        <circle
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={trackColor}
          strokeWidth={trackWidth}
        />
        <circle
          className={`${styles.svg_pi_indicator} ${
            spinnerMode ? styles.svg_pi_indicator__spinner : ""
          }`}
          style={{ animationDuration: `${spinnerSpeed * 1000}` }}
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={indicatorColor}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
        />
      </svg>
      {!hideLabel && (
        <div className={styles.svg_pi_label} style={{ color: labelColor }}>
          <span className={styles.svg_pi_label__loading}>{label}</span>
          {!spinnerMode && (
            <span className={styles.svg_pi_label__progress}>{`${
              progress > 100 ? 100 : progress
            }%`}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default ProgressBar;
