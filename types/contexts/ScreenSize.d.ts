export function ScreenSizeProvider(props: any): Context<React.Context<any>>;
export function useScreenSize(): Context<React.Context<any>>;
export type TailwindScreenSize = 'xs' | 'sm' | 'lg' | 'xl' | '2xl';
export type ScreenSize = {
    width?: number;
    height?: number;
    inner_width?: number;
    inner_height?: number;
};
export type ScreenSizeContext = any;
import React from 'react';
