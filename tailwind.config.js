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
			borderRadius: {
				'btnradius': 'var(--btnradius)',
			},
			colors: {
				'btnbg': 'var(--btnbg)',
				'btntext': 'var(--btntext)',
				'btnhover': 'var(--btnhover)',
				'backupbg': 'var(--backupbg)',
				'backuptext': 'var(--backuptext)',
				'backuphover': 'var(--backuphover)',
				'backupbgactive': 'var(--backupbgactive)',
				'backuptextactive': 'var(--backuptextactive)',
				'episbgcolor': 'var(--episbgcolor)',
				'episbghover': 'var(--episbghover)',
				'episbglist': 'var(--episbglist)',
				'epistextsv': 'var(--epistextsv)',
				'commentsbg': 'var(--commentsbg)',
			},
			borderWidth: {
				'bordersv': 'var(--bordersv)',
			}
		}
	},
	corePlugins: {
		aspectRatio: false,
	},
 	plugins: [],
};

export default config;
