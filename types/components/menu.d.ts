export const Menu: React.FC<MenuProps>;
export type MenuIconStyles = {
    colorActive: string;
    colorInactive: string;
};
export type MenuStyles = {
    icon?: MenuIconStyles;
};
export type MenuProps = {
    visible?: boolean;
    showMenu?: (arg0: boolean) => void;
    page?: string;
    styles?: MenuStyles;
    language?: string;
};
import React from 'react';
