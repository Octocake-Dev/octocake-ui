import colors from "../colors";

const Button = {
  variants: {
    primary: {
      border: "none",
      color: "white",
      backgroundColor: colors.primary[400],

      ":hover": {
        backgroundColor: colors.primary[500],
      },
      ":focus": {
        backgroundColor: colors.primary[600],
        boxShadow: `0px 0px 0px 4px rgba(53,143,128,0.4)`,
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
      padding: "12px 22px",
    },

    lg: {
      padding: "14px 24px",
    },
  },
};

export default Button;
