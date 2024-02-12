export declare const COMPONENTS_EXCEPTIONS: string[];
export declare const COMPONENTS_DIR = "lib";
export declare const COMPONENTS_FILE = "components";
export declare const COMPONENTS_MAIN = "index";
export declare const COMPONENTS_TYPES = "types";
export declare const COMPONENTS_STYLE = "style";
export declare const COMPONENTS_REGISTRATION = "create";
export declare const COMPONENTS_REGISTRATION_FUNCTION = "createUiComponents";
export type ComponentsData = {
    design: string;
    name: string;
    alias: string;
    codeFull: string;
    dir: string;
};
export type ComponentsItem = {
    name: string;
    components: ComponentsData[];
};
export type ComponentsList = ComponentsItem[];