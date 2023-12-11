export function get_items_all(): Promise<ItemsAllResult>;
export function get_item_by_id(id: string): ItemResult;
export type Language = import("./types.js").Language;
export type Item = {
    id: string;
    title: Language;
    description: Language;
    url: string;
};
export type ItemsAllResult = import("./lib/Result.js").Entity<Array<Item>, Error>;
export type ItemResult = import("./lib/Result.js").Entity<Item, Error>;
