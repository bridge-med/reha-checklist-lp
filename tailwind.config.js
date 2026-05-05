/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 医療系 BtoB 寄りモダン路線
        med: {
          // メインのメディカルブルー
          50:  '#EFF5FB',
          100: '#DCEAF5',
          200: '#B5D2E8',
          300: '#85B5D8',
          400: '#5093C5',
          500: '#2B6CB0', // ベース
          600: '#235A95',
          700: '#1B4779',
          800: '#163A63',
          900: '#10294A',
        },
        teal: {
          // 補助のティール (薄め)
          50:  '#EEF8F8',
          100: '#D7EFEF',
          200: '#A8DCDC',
          300: '#7BC7C7',
          400: '#52B2B2',
          500: '#369797',
        },
        ink: {
          DEFAULT: '#1A2233',
          soft: '#3B4759',
          mute: '#6B7689',
          line: '#E2E8EE',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          off: '#FAFBFC',
          sand: '#F6F2EC', // 補助の淡いベージュ
        },
      },
      fontFamily: {
        jp: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
        en: ['Inter', '"Noto Sans JP"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)',
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.05)',
      },
      borderRadius: {
        card: '14px',
      },
      maxWidth: {
        prose: '720px',
        site: '1180px',
      },
    },
  },
  plugins: [],
};
