export function loader(args: import("react-router-dom").LoaderFunctionArgs<ItemLoaderFunctionArgs>): ({} | Response) | Promise<{} | Response>;
export type Item = import("../data.js").Item;
export const Item: React.FC;
export type ItemLoaderFunctionArgs = {
    params: {
        itemId: string;
    };
};
export type ItemLoadedData = {
    item?: Item;
};
import React from 'react';
