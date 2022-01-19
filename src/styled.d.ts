import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    pallete: Record<string, string>;
    queries: Reacord<string, string>;
  }
}
