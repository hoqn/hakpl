declare module "*.css" {
  const styleSheet: any;
  export default styleSheet;
}

declare global {
  import React from "react";

  type BaseProps = {
    className?: string;
  };

  type SlottableProps<P = {}> = P & { asChild?: boolean };
}

export { };
