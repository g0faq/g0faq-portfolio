import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#050608",
        graphite: "#0B0D12",
        panel: "rgba(255, 255, 255, 0.06)",
        mint: "#79F2C0",
        violet: "#9B7CFF",
        acid: "#B8FF5C",
      },
      boxShadow: {
        glow: "0 24px 90px rgba(121, 242, 192, 0.14)",
        violet: "0 24px 80px rgba(155, 124, 255, 0.18)",
      },
      backgroundImage: {
        "premium-gradient": "linear-gradient(135deg, rgba(121, 242, 192, 0.95), rgba(155, 124, 255, 0.95))",
        "panel-gradient": "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.035))",
      },
    },
  },
  plugins: [],
} satisfies Config;
