tailwind.config = {
    content: ["../../app/**/*.{php,html,js}"],
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    theme: {
      extend: {
        colors: {
          background: "#4277FF",
          title: "#0099BA",
          lightred: "#FF4B4B",
          lightorange: "#FFA14A",
          darkblue: "#16009E",
          purple: "#5200FF", 
          pink: "#FF008A",
          limegreen: "#85FF91",
          orange: "#FF9900",
          white: "#fff",
          black: "#000",
        },
      },
      fontFamily: {
        font: ["Mukta", "sans-serif"],
      },
      width: {
        '96': '448px',
      }
    },
  };
  