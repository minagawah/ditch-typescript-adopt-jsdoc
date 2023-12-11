export type NODE_ENV = string;
export type PUBLIC_URL = string;
export type Locale = 'en' | 'ja';
export type Language = {
    [x: string]: string;
};
export type GenericIconStyles = {
    size?: string;
    color?: string;
};
export type GenericIconProps<T extends Object = GenericIconStyles> = {
    styles?: T;
    css?: import('@emotion/serialize').CSSInterpolation;
    children?: React.ReactElement<any>;
};
