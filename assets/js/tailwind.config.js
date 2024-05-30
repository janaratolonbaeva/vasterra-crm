tailwind.config = {
  theme: {
    borderRadius: {
      md: '20px',
      lg: '40px',
      DEFAULT: '6px',
      xl: '60px',
      full: '50%',
    },
    fontFamily: {
      body: ['Inter'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      md: ['18px', '156%'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      xxl: ['32px', '130%'],
    },
    extend: {
      colors: {
        primary: '#2253d0',
        dark_blue: '#122045',
        white: '#fff',
        gray: '#e7e8ec',
        dark_gray: '#a1a7b8',
        indigo: '#4a67b2',
        base_bg: '#f2f2f2',
        warning: '#eb4f3c',
        danger: '#e74848',
      },
    },
    screens: {
      xs: '450px',
      sm: '640px',
      md: '769px',
      lg: '992px',
      xl: '1300px',
    },
  },
};
