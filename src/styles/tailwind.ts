import type { CustomThemeConfig } from "tailwindcss/types/config";
import twPlugin from "tailwindcss/plugin";

type ThemeConfigColorset<P1 extends string = string, P2 extends string = string> = { class: P1, css: P2 };

type ThemeConfig = {
  colorNames: ThemeConfigColorset[];
  colorVariants: ThemeConfigColorset[];
  colorTypes: ThemeConfigColorset[];
}

const themeConfig: ThemeConfig = {
  colorNames: [
    { class: "accent", css: "ac" },
    { class: "base", css: "bs" },
    { class: "surface", css: "sf" },
  ],
  colorVariants: [
    { class: "container", css: "cont" },
    { class: "fill", css: "fill" },
  ],
  colorTypes: [
    { class: "fg", css: "fg" },
    { class: "bg", css: "bg" },
    { class: "muted", css: "mt" },
  ],
};

const themeColors = themeConfig.colorNames.reduce(
  (ac, name) => {
    const variants = themeConfig.colorVariants.reduce(
      (ac, variant) => {
        const types = themeConfig.colorTypes.reduce(
          (ac, type) => ({ ...ac, [type.class]: `hsl(var(--color-${name.css}-${variant.css}-${type.css}) / <alpha-value>)` })
          , {}
        );

        return { ...ac, [variant.class]: types };
      },
      {}
    );

    return { ...ac, [name.class]: variants };
  },
  {
    muted: `hsl(var(--color-muted) / <alpha-value>)`,
  }
)

const plugin = twPlugin(({ addComponents }) => {

  const components = themeConfig.colorNames.reduce((ac, name) => {
    const variants = themeConfig.colorVariants.reduce((ac, variant) => (
      {
        ...ac, [`.paint-${name.class}-${variant.class}`]: {
          "border-color": `hsl(var(--color-${name.css}-${variant.css}-mt) / .40)`,
          [`--color-muted`]: `var(--color-${name.css}-${variant.css}-mt)`,
          [`@apply bg-${name.class}-${variant.class}-bg text-${name.class}-${variant.class}-fg`]: {},
          [`@apply ring-${name.class}-${variant.class}-muted/50`]: {},
        }
      }
    ), {});

    return { ...ac, ...variants };
  }, {});

  addComponents(components);

});

export { themeColors, plugin };
