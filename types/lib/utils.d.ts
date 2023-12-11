export function generic_icon_props_handler({ styles, ...props }: GenericIconProps): GenericIconProps;
export const int: (x: number) => number;
export function noop(): void;
export function fixed(decimals?: number): (n: any) => number;
export function capitalize(s: any): any;
export function gen_code_4(): string;
export function gen_code_12(): string;
export function rad_to_deg(rad: any): number;
export function deg_to_rad(deg: any): number;
export function normalize_degree(deg: any): number;
export function normalize_angle(deg: any): number;
export const normalize_radian: any;
export function get_position(rad: any, radius?: number, center?: {
    x: number;
    y: number;
}): {
    deg: number;
    x: number;
    y: number;
};
export function get_position_clock(rad: any, radius?: number, center?: {
    x: number;
    y: number;
}): {
    deg: number;
    x: number;
    y: number;
};
export function euler_from_quaternion(q?: any[]): number[];
export function get_utc_offset_in_hours(dt: any): number;
export function str_to_hex(str: any): number;
export function pad(digits?: number): (n?: number) => string;
export function is_leap_year(year: any): boolean;
export const is_iOS: RegExpMatchArray;
export function debounce(f: Function, delay: number): (...args: any[]) => void;
