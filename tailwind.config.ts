
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
					black: '#0a0a0a',
					darkgray: '#1a1a1a',
					gray: '#2a2a2a',
					purple: {
						light: '#8b5cf6',
						DEFAULT: '#7c3aed',
						dark: '#5b21b6'
					},
					gold: {
						light: '#fbbf24',
						DEFAULT: '#f59e0b',
						dark: '#d97706'
					},
					cyan: '#06b6d4'
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
				'fade-in': {
					from: {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
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
				},
				'neural-pulse': {
					'0%, 100%': { 
						opacity: '0.6',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.05)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'pulse-glow': 'pulse-glow 3s infinite ease-in-out',
				'float': 'float 6s infinite ease-in-out',
				'typewriter': 'typewriter 4s steps(40) forwards',
				'typewriter-blink': 'typewriter-blink 0.7s infinite',
				'rotate-coin': 'rotate-coin 6s infinite linear',
				'shimmer': 'shimmer 3s infinite linear',
				'neural-path': 'neural-path 2s forwards ease-out',
				'neural-pulse': 'neural-pulse 2s infinite ease-in-out'
			},
			backgroundImage: {
				'neural-gradient': 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(0, 0, 0, 0) 100%)',
				'gradient-gold': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
				'gradient-purple': 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #7c3aed 100%)',
				'gradient-cyber': 'linear-gradient(90deg, #7c3aed, #06b6d4, #8b5cf6, #7c3aed)',
				'constellation': 'radial-gradient(2px 2px at 20px 30px, #06b6d4, transparent), radial-gradient(2px 2px at 40px 70px, rgba(139, 92, 246, 0.6), transparent), radial-gradient(1px 1px at 90px 40px, #fbbf24, transparent), radial-gradient(1px 1px at 130px 80px, rgba(6, 182, 212, 0.4), transparent), radial-gradient(2px 2px at 160px 30px, rgba(251, 191, 36, 0.6), transparent)'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
