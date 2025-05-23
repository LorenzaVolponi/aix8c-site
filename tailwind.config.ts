
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
				// Custom AIX8C colors
				aix: {
					black: '#050505',
					darkgray: '#121212',
					gray: '#333333',
					purple: {
						light: '#7209b7',
						DEFAULT: '#3a0ca3',
						dark: '#240046'
					},
					gold: {
						light: '#ffd60a',
						DEFAULT: '#e8a20c',
						dark: '#cc5803'
					},
					cyan: '#4cc9f0'
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
				'pulse-glow': {
					'0%, 100%': { opacity: '0.6' },
					'50%': { opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'typewriter': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'typewriter-blink': {
					'0%, 100%': { borderRight: '2px solid transparent' },
					'50%': { borderRight: '2px solid currentColor' }
				},
				'rotate-coin': {
					'0%': { transform: 'rotateY(0deg)' },
					'50%': { transform: 'rotateY(180deg)' },
					'100%': { transform: 'rotateY(360deg)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'neural-path': {
					'0%': { strokeDashoffset: '1000' },
					'100%': { strokeDashoffset: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 3s infinite ease-in-out',
				'float': 'float 6s infinite ease-in-out',
				'typewriter': 'typewriter 4s steps(40) forwards',
				'typewriter-blink': 'typewriter-blink 0.7s infinite',
				'rotate-coin': 'rotate-coin 6s infinite linear',
				'shimmer': 'shimmer 3s infinite linear',
				'neural-path': 'neural-path 2s forwards ease-out'
			},
			backgroundImage: {
				'neural-gradient': 'radial-gradient(circle at 50% 50%, rgba(76, 201, 240, 0.1) 0%, rgba(58, 12, 163, 0.1) 50%, rgba(0, 0, 0, 0) 100%)',
				'gradient-gold': 'linear-gradient(135deg, #ffd60a 0%, #e8a20c 50%, #cc5803 100%)',
				'gradient-purple': 'linear-gradient(135deg, #4cc9f0 0%, #7209b7 50%, #3a0ca3 100%)',
				'gradient-cyber': 'linear-gradient(90deg, #3a0ca3, #4cc9f0, #7209b7, #3a0ca3)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
