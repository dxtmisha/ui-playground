export declare const COMPONENTS_EXCEPTIONS: string[];
export declare const COMPONENTS_DIR = "lib";
export declare const COMPONENTS_DIR_FLAGS: string[];
export declare const COMPONENTS_FILE = "components";
export declare const COMPONENTS_FLAGS = "flags";
export declare const COMPONENTS_MEDIA = "media";
export declare const COMPONENTS_MAIN = "main";
export declare const COMPONENTS_TYPES = "types";
export declare const COMPONENTS_FILE_TYPES = "fileTypes";
export declare const COMPONENTS_STYLE = "style";
export declare const COMPONENTS_STYLE_INIT = "style-init";
export declare const COMPONENTS_REGISTRATION = "create";
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
