import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        charity: {
          cream: {
            50: "#fdfcfb",
            100: "#faf8f6",
            200: "#f5f1ed",
            300: "#ede6de",
            400: "#e3d5cb",
            500: "#d6c4b5",
            DEFAULT: "#d6c4b5",
          },
          brown: {
            50: "#f9f7f4",
            100: "#f0ebe3",
            200: "#e0d5c7",
            300: "#c8b5a0",
            400: "#b59985",
            500: "#8b6f47",
            600: "#6b5639",
            DEFAULT: "#8b6f47",
          },
          sage: {
            50: "#f7f8f7",
            100: "#eef0ee",
            200: "#dde0dd",
            300: "#c4c9c4",
            400: "#a5aca5",
            500: "#8b9d8b",
            DEFAULT: "#8b9d8b",
          },
          warm: {
            50: "#fefefe",
            100: "#fdfdfc",
            200: "#faf9f8",
            300: "#f6f4f2",
            400: "#f0edea",
            500: "#e8e3de",
            DEFAULT: "#e8e3de",
          },
        },
      },
      fontFamily: {
        arabic: ["Amiri", "serif"],
        "arabic-calligraphy": ["Scheherazade New", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
