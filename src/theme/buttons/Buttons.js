import colors from "../colors/Colors";

const Buttons = {
  schemes: {
    primary: {
      border: "none",
      color: "white",
      backgroundColor: colors.primary[500],

      ":hover": {
        backgroundColor: colors.primary[600],
      },
      ":focus": {
        backgroundColor: colors.primary[700],
        boxShadow: `0px 0px 0px 4px rgba(36,130,119,0.4)`,
      },
    },

    secondary: {},

    ghost: {},
  },

  sizes: {
    sm: {
      padding: "10px 20px",
    },

    md: {
      padding: "12px 25px",
    },

    lg: {
      padding: "14px 30px",
    },
  },
};

export default Buttons;
