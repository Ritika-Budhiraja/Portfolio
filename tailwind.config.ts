
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for the portfolio
				purple: {
					light: '#d6bcfa',
					DEFAULT: '#9b87f5',
					medium: '#8B5CF6',
					dark: '#7E69AB',
					deeper: '#6E59A5',
					darkest: '#1A1F2C',
				},
				pink: {
					light: '#FBD5E8',
					DEFAULT: '#F472B6',
					medium: '#EC4899',
					dark: '#DB2777',
					deeper: '#BE185D',
				},
				space: {
					black: '#0f0f1b',
					dark: '#1A1F2C',
					blue: '#1c1c3b',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1', filter: 'brightness(1)' },
					'50%': { opacity: '0.8', filter: 'brightness(1.2)' }
				},
				'rotate-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'fly-in': {
					from: { transform: 'translateY(50px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				},
				'fly-in-left': {
					from: { transform: 'translateX(-50px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				'fly-in-right': {
					from: { transform: 'translateX(50px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				'scale-up': {
					from: { transform: 'scale(0.8)', opacity: '0' },
					to: { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 5s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'fly-in': 'fly-in 0.8s ease-out forwards',
				'fly-in-left': 'fly-in-left 0.8s ease-out forwards',
				'fly-in-right': 'fly-in-right 0.8s ease-out forwards',
				'scale-up': 'scale-up 0.5s ease-out forwards',
			},
			fontFamily: {
				'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'purple-gradient': 'linear-gradient(90deg, #9b87f5 0%, #6E59A5 100%)',
				'purple-pink-gradient': 'linear-gradient(90deg, #9b87f5 0%, #F472B6 100%)',
				'space-gradient': 'linear-gradient(180deg, #1A1F2C 0%, #0f0f1b 100%)',
			},
			boxShadow: {
				'neon-purple': '0 0 5px #9b87f5, 0 0 10px #9b87f5, 0 0 15px #9b87f5',
				'neon-blue': '0 0 5px #8B5CF6, 0 0 10px #8B5CF6, 0 0 15px #8B5CF6',
				'neon-pink': '0 0 5px #F472B6, 0 0 10px #F472B6, 0 0 15px #F472B6',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
