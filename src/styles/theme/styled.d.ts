import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      social: string;
      theme: string;
      text: string;
      background: string;
    };

    fonts: {
      primary: string;
    };

    fontSize: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
    };

    fontWeight: {
      regular: string;
      medium: string;
      semibold: string;
    };
  }
}

export default DefaultTheme;
