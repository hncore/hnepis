/** @type {import('tailwindcss').Config} config */
const config = {
	important: true,
	content: [
		'./src/**/*.php', 
		'./src/*.php', 
		'./resources/**/*.{php,vue,js}'
	],
	theme: {
		screens: {
			'sm': '576px',
			'md': '768px',
			'lg': '992px',
			'xl': '1200px',
			'2xl': '1400px',
		},
		extend: {
			zIndex: {
				'1': '1',
				'2': '2',
			},
			inset: {
				'-4p': '-4%',
				'1p': '1%', 
				'2p': '2%', 
				'4p': '4%', 
				'10p': '10%',
				'5p': '5%',
				'7p': '7%',
			},
			margin: {
				'-15px': '-15px',
			},
			flex: {
				'0': '0 0 83.333333%',
				'2.5': '0 0 25%',
				'3': '0 0 33.33333%',
				'5': '0 0 50%',
				'7': '0 0 75%',
				'9': '0 0 91.66667%',
				'10': '0 0 100%'
			},
			width: {
				'22': '5.625rem',
			},
			height: {
				'3px': '3px',
				'22': '5.625rem',
			},
			backgroundImage: {
				'body-color': 'linear-gradient(150deg, #1d2636 15%, #333c4d 70%, #30394a 94%)',
				'breadcrumbs': 'linear-gradient(150deg, #181f2c 15%, #2c3d5c 70%, #253756 94%)',
				'active': 'linear-gradient(150deg,#684ede 15%,#8b66d8 70%,#e078e2 94%)',
				'live-demo': 'linear-gradient(45deg, #ff8c00 0%, #ff4500 100%)',
				'grid-slate-700/25': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.25)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
				'grid-slate-100': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
			},
			colors: {
				'yankees': '#1d2636',
			},
			rotate: {
				'10': '10deg',
			},
			boxShadow: {
				'full': '0 .5rem 1rem rgb(0 0 0 / 37%)',
				'sale-round': '0 0 10px rgb(63 29 120 / 20%)',
				'nob': '-2px -3px 5px 0px rgba(0,0,0,0.3)'
			},
		},
		container: {
			center: true, 
			screens: {
				sm: '540px',
				md: '720px',
				lg: '960px',
				xl: '1140px',
				'2xl': '1140px',
			}
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
 	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
};

export default config;
