/**
 * As long as I have `"jsxImportSource": "@emotion/react"`
 * in TS config, we can pass `css` attribute to JSX.
 * However, when assigning 'css' to SVG file, we get
 * the following error:
 *
 * error TS2322: Type '{ css: SerializedStyles; }'
 * is not assignable to type 'IntrinsicAttributes'.
 * Property 'css' does not exist on type 'IntrinsicAttributes'.
 *
 * Hence, we need the following definition.
 */

declare module '*.svg' {
  import type { ReactElement, SVGProps } from 'react';
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}
