import type { Config } from 'tailwindcss'

import { heroui } from '@heroui/react'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: { drawer: '449px', sm: '768px', md: '1024px', lg: '1536px' },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      layout: {
        dividerWeight: '1px',
        disabledOpacity: 0.55,
        borderWidth: { small: '1px', medium: '1px', large: '3px' },
      },
    }),
  ],
}

export default config
