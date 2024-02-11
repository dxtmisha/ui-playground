import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            focus: BooleanConstructor;
            disabled: BooleanConstructor;
            selected: BooleanConstructor;
            loading: BooleanConstructor;
            readonly: BooleanConstructor;
            adaptive: import("vue").PropType<"icon" | undefined>;
            size: {
                type: import("vue").PropType<"x" | "sm" | "md" | "lg" | "xs" | "xl" | undefined>;
                default: "x" | "sm" | "md" | "lg" | "xs" | "xl" | undefined;
            };
            outline: BooleanConstructor;
            link: BooleanConstructor;
            intent: {
                type: import("vue").PropType<"default" | "positive" | "informative" | "negative" | "neutral" | undefined>;
                default: "default" | "positive" | "informative" | "negative" | "neutral" | undefined;
            };
            primary: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            secondary: BooleanConstructor;
            ghost: BooleanConstructor;
            palette: import("vue").PropType<"carmine" | "iris" | "redfish" | "goldenrod" | "asparagus" | "slate" | "gray" | "alpha" | "pistachio" | "mint" | "jade" | "teal" | "celestial" | "indigo" | "orchid" | "cerise" | undefined>;
            tag: {
                type: import("vue").PropType<string | undefined>;
                default: string | undefined;
            };
            to: StringConstructor;
            value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
            detail: ObjectConstructor[];
            progress: import("vue").PropType<boolean | import("../../constructors/Progress/props.ts").ProgressProps | undefined>;
            iconTrailing: import("vue").PropType<string | import("../../constructors/Icon/props.ts").IconProps | undefined>;
            icon: import("vue").PropType<string | import("../../constructors/Icon/props.ts").IconProps | undefined>;
            iconTurn: BooleanConstructor;
            iconHide: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onClick?: ((event: MouseEvent, value: {
                type: string;
                value: any;
                detail: Record<string, any> | undefined;
            }) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (event: MouseEvent, value: {
                type: string;
                value: any;
                detail: Record<string, any> | undefined;
            }) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            focus: BooleanConstructor;
            disabled: BooleanConstructor;
            selected: BooleanConstructor;
            loading: BooleanConstructor;
            readonly: BooleanConstructor;
            adaptive: import("vue").PropType<"icon" | undefined>;
            size: {
                type: import("vue").PropType<"x" | "sm" | "md" | "lg" | "xs" | "xl" | undefined>;
                default: "x" | "sm" | "md" | "lg" | "xs" | "xl" | undefined;
            };
            outline: BooleanConstructor;
            link: BooleanConstructor;
            intent: {
                type: import("vue").PropType<"default" | "positive" | "informative" | "negative" | "neutral" | undefined>;
                default: "default" | "positive" | "informative" | "negative" | "neutral" | undefined;
            };
            primary: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            secondary: BooleanConstructor;
            ghost: BooleanConstructor;
            palette: import("vue").PropType<"carmine" | "iris" | "redfish" | "goldenrod" | "asparagus" | "slate" | "gray" | "alpha" | "pistachio" | "mint" | "jade" | "teal" | "celestial" | "indigo" | "orchid" | "cerise" | undefined>;
            tag: {
                type: import("vue").PropType<string | undefined>;
                default: string | undefined;
            };
            to: StringConstructor;
            value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
            detail: ObjectConstructor[];
            progress: import("vue").PropType<boolean | import("../../constructors/Progress/props.ts").ProgressProps | undefined>;
            iconTrailing: import("vue").PropType<string | import("../../constructors/Icon/props.ts").IconProps | undefined>;
            icon: import("vue").PropType<string | import("../../constructors/Icon/props.ts").IconProps | undefined>;
            iconTurn: BooleanConstructor;
            iconHide: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onClick?: ((event: MouseEvent, value: {
                type: string;
                value: any;
                detail: Record<string, any> | undefined;
            }) => any) | undefined;
        }, {
            size: "x" | "sm" | "md" | "lg" | "xs" | "xl" | undefined;
            link: boolean;
            focus: boolean;
            disabled: boolean;
            selected: boolean;
            iconTurn: boolean;
            iconHide: boolean;
            loading: boolean;
            tag: string | undefined;
            readonly: boolean;
            outline: boolean;
            intent: "default" | "positive" | "informative" | "negative" | "neutral" | undefined;
            primary: boolean;
            secondary: boolean;
            ghost: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            focus: BooleanConstructor;
            disabled: BooleanConstructor;
            selected: BooleanConstructor;
            loading: BooleanConstructor;
            readonly: BooleanConstructor;
            adaptive: import("vue").PropType<"icon" | undefined>;
            size: {
                type: import("vue").PropType<"x" | "sm" | "md" | "lg" | "xs" | "xl" | undefined>;
                default: "x" | "sm" | "md" | "lg" | "xs" | "xl" | undefined;
            };
            outline: BooleanConstructor;
            link: BooleanConstructor;
            intent: {
                type: import("vue").PropType<"default" | "positive" | "informative" | "negative" | "neutral" | undefined>;
                default: "default" | "positive" | "informative" | "negative" | "neutral" | undefined;
            };
            primary: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            secondary: BooleanConstructor;
            ghost: BooleanConstructor;
            palette: import("vue").PropType<"carmine" | "iris" | "redfish" | "goldenrod" | "asparagus" | "slate" | "gray" | "alpha" | "pistachio" | "mint" | "jade" | "teal" | "celestial" | "indigo" | "orchid" | "cerise" | undefined>;
            tag: {
                type: import("vue").PropType<string | undefined>;
                default: string | undefined;
            };
            to: StringConstructor;
            value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
            detail: ObjectConstructor[];
            progress: import("vue").PropType<boolean | import("../../constructors/Progress/props.ts").ProgressProps | undefined>;
            iconTrailing: import("vue").PropType<string | import("../../constructors/Icon/props.ts").IconProps | undefined>;
            icon: import("vue").PropType<string | import("../../constructors/Icon/props.ts").IconProps | undefined>;
            iconTurn: BooleanConstructor;
            iconHide: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onClick?: ((event: MouseEvent, value: {
                type: string;
                value: any;
                detail: Record<string, any> | undefined;
            }) => any) | undefined;
        }, {}, {}, {}, {}, {
            size: "x" | "sm" | "md" | "lg" | "xs" | "xl" | undefined;
            link: boolean;
            focus: boolean;
            disabled: boolean;
            selected: boolean;
            iconTurn: boolean;
            iconHide: boolean;
            loading: boolean;
            tag: string | undefined;
            readonly: boolean;
            outline: boolean;
            intent: "default" | "positive" | "informative" | "negative" | "neutral" | undefined;
            primary: boolean;
            secondary: boolean;
            ghost: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        focus: BooleanConstructor;
        disabled: BooleanConstructor;
        selected: BooleanConstructor;
        loading: BooleanConstructor;
        readonly: BooleanConstructor;
        adaptive: import("vue").PropType<"icon" | undefined>;
        size: {
            type: import("vue").PropType<"x" | "sm" | "md" | "lg" | "xs" | "xl" | undefined>;
            default: "x" | "sm" | "md" | "lg" | "xs" | "xl" | undefined;
        };
        outline: BooleanConstructor;
        link: BooleanConstructor;
        intent: {
            type: import("vue").PropType<"default" | "positive" | "informative" | "negative" | "neutral" | undefined>;
            default: "default" | "positive" | "informative" | "negative" | "neutral" | undefined;
        };
        primary: {
            type: BooleanConstructor;
            default: boolean | undefined;
        };
        secondary: BooleanConstructor;
        ghost: BooleanConstructor;
        palette: import("vue").PropType<"carmine" | "iris" | "redfish" | "goldenrod" | "asparagus" | "slate" | "gray" | "alpha" | "pistachio" | "mint" | "jade" | "teal" | "celestial" | "indigo" | "orchid" | "cerise" | undefined>;
        tag: {
            type: import("vue").PropType<string | undefined>;
            default: string | undefined;
        };
        to: StringConstructor;
        value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
        detail: ObjectConstructor[];
        progress: import("vue").PropType<boolean | import("../../constructors/Progress/props.ts").ProgressProps | undefined>;
        iconTrailing: import("vue").PropType<string | import("../../constructors/Icon/props.ts").IconProps | undefined>;
        icon: import("vue").PropType<string | import("../../constructors/Icon/props.ts").IconProps | undefined>;
        iconTurn: BooleanConstructor;
        iconHide: BooleanConstructor;
        label: (StringConstructor | NumberConstructor)[];
    }>> & {
        onClick?: ((event: MouseEvent, value: {
            type: string;
            value: any;
            detail: Record<string, any> | undefined;
        }) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (event: MouseEvent, value: {
            type: string;
            value: any;
            detail: Record<string, any> | undefined;
        }) => void;
    }, string, {
        size: "x" | "sm" | "md" | "lg" | "xs" | "xl" | undefined;
        link: boolean;
        focus: boolean;
        disabled: boolean;
        selected: boolean;
        iconTurn: boolean;
        iconHide: boolean;
        loading: boolean;
        tag: string | undefined;
        readonly: boolean;
        outline: boolean;
        intent: "default" | "positive" | "informative" | "negative" | "neutral" | undefined;
        primary: boolean;
        secondary: boolean;
        ghost: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../../constructors/uses/ref/useLabel.ts").UseLabelSlots> & import("../../constructors/uses/ref/useLabel.ts").UseLabelSlots;
    });
    tags: string[];
    parameters: {
        design: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: import("../../types/storybook.ts").StorybookArgs;
    args: import("../../types/storybook.ts").StorybookArgsValue;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Button: Story;
export declare const ButtonHierarchy: Story;
export declare const ButtonPrimary: Story;
export declare const ButtonSecondary: Story;
export declare const ButtonOutline: Story;
export declare const ButtonGhost: Story;
export declare const ButtonSize: Story;
export declare const ButtonIntent: Story;
