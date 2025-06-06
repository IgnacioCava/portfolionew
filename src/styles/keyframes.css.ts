import { keyframes } from "@vanilla-extract/css";

export const moveY = keyframes({
  "0%": {
    top: "0%",
    transform: "translateY(0%)",
  },
  "20%": {
    top: "40%",
    transform: "translateY(-40%)",
  },
  "40%": {
    top: "70%",
    transform: "translateY(-70%)",
    scale: ".5",
    transformOrigin: "top right",
  },
  "60%": {
    top: "85%",
    transform: "translateY(-85%)",
    scale: ".5",
    transformOrigin: "top right",
  },
  "80%": {
    top: "95%",
    transform: "translateY(-95%)",
  },
  "100%": {
    top: "100%",
    transform: "translateY(-100%)",
  },
});

export const moveYReverse = keyframes({
  "0%": {
    bottom: "0%",
    transform: "translateY(0%)",
  },
  "20%": {
    bottom: "40%",
    transform: "translateY(40%)",
  },
  "40%": {
    bottom: "70%",
    transform: "translateY(70%)",
    scale: ".5",
    transformOrigin: "bottom left",
  },
  "60%": {
    bottom: "85%",
    transform: "translateY(85%)",
    scale: ".5",
    transformOrigin: "bottom left",
  },
  "80%": {
    bottom: "95%",
    transform: "translateY(95%)",
  },
  "100%": {
    bottom: "100%",
    transform: "translateY(100%)",
  },
});

export const moveX = keyframes({
  "0%": {
    left: "0%",
    transform: "translateX(0%)",
  },
  "20%": {
    left: "5%",
    transform: "translateX(-5%)",
  },
  "40%": {
    left: "15%",
    transform: "translateX(-15%)",
  },
  "60%": {
    left: "30%",
    transform: "translateX(-30%)",
  },
  "80%": {
    left: "60%",
    transform: "translateX(-60%)",
  },
  "100%": {
    left: "100%",
    transform: "translateX(-100%)",
  },
});

export const moveXReverse = keyframes({
  "0%": {
    right: "0%",
    transform: "translateX(0%)",
  },
  "20%": {
    right: "5%",
    transform: "translateX(5%)",
  },
  "40%": {
    right: "15%",
    transform: "translateX(15%)",
  },
  "60%": {
    right: "30%",
    transform: "translateX(30%)",
  },
  "80%": {
    right: "60%",
    transform: "translateX(60%)",
  },
  "100%": {
    right: "100%",
    transform: "translateX(100%)",
  },
});
