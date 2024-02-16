import type { StoryObj } from '@storybook/vue3';
import '../icons';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            turn: BooleanConstructor;
            disabled: BooleanConstructor;
            hide: BooleanConstructor;
            animationType: {
                type: import("vue").PropType<"type1" | "type2" | undefined>;
                default: "type1" | "type2" | undefined;
            };
            animationShow: BooleanConstructor;
            overlay: BooleanConstructor;
            dynamic: BooleanConstructor;
            start: BooleanConstructor;
            end: BooleanConstructor;
            high: BooleanConstructor;
            variation: {
                type: import("vue").PropType<"icon" | "payment" | "avatar" | "country" | undefined>;
                default: "icon" | "payment" | "avatar" | "country" | undefined;
            };
            shape: {
                type: import("vue").PropType<"circle" | "rect" | "box" | undefined>;
                default: "circle" | "rect" | "box" | undefined;
            };
            size: {
                type: import("vue").PropType<"12" | "16" | "20" | "24" | "32" | undefined>;
                default: "12" | "16" | "20" | "24" | "32" | undefined;
            };
            icon: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
            iconActive: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
            active: BooleanConstructor;
        }>> & {
            onLoad?: ((image: import("../../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
        }, {
            isActive: import("vue").ComputedRef<boolean>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            load: (image: import("../../constructors/Image/typesBasic").ImageEventData) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            turn: BooleanConstructor;
            disabled: BooleanConstructor;
            hide: BooleanConstructor;
            animationType: {
                type: import("vue").PropType<"type1" | "type2" | undefined>;
                default: "type1" | "type2" | undefined;
            };
            animationShow: BooleanConstructor;
            overlay: BooleanConstructor;
            dynamic: BooleanConstructor;
            start: BooleanConstructor;
            end: BooleanConstructor;
            high: BooleanConstructor;
            variation: {
                type: import("vue").PropType<"icon" | "payment" | "avatar" | "country" | undefined>;
                default: "icon" | "payment" | "avatar" | "country" | undefined;
            };
            shape: {
                type: import("vue").PropType<"circle" | "rect" | "box" | undefined>;
                default: "circle" | "rect" | "box" | undefined;
            };
            size: {
                type: import("vue").PropType<"12" | "16" | "20" | "24" | "32" | undefined>;
                default: "12" | "16" | "20" | "24" | "32" | undefined;
            };
            icon: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
            iconActive: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
            active: BooleanConstructor;
        }>> & {
            onLoad?: ((image: import("../../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
        }, {
            size: "12" | "16" | "20" | "24" | "32" | undefined;
            animationType: "type1" | "type2" | undefined;
            turn: boolean;
            disabled: boolean;
            hide: boolean;
            active: boolean;
            animationShow: boolean;
            overlay: boolean;
            dynamic: boolean;
            start: boolean;
            end: boolean;
            high: boolean;
            variation: "icon" | "payment" | "avatar" | "country" | undefined;
            shape: "circle" | "rect" | "box" | undefined;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            turn: BooleanConstructor;
            disabled: BooleanConstructor;
            hide: BooleanConstructor;
            animationType: {
                type: import("vue").PropType<"type1" | "type2" | undefined>;
                default: "type1" | "type2" | undefined;
            };
            animationShow: BooleanConstructor;
            overlay: BooleanConstructor;
            dynamic: BooleanConstructor;
            start: BooleanConstructor;
            end: BooleanConstructor;
            high: BooleanConstructor;
            variation: {
                type: import("vue").PropType<"icon" | "payment" | "avatar" | "country" | undefined>;
                default: "icon" | "payment" | "avatar" | "country" | undefined;
            };
            shape: {
                type: import("vue").PropType<"circle" | "rect" | "box" | undefined>;
                default: "circle" | "rect" | "box" | undefined;
            };
            size: {
                type: import("vue").PropType<"12" | "16" | "20" | "24" | "32" | undefined>;
                default: "12" | "16" | "20" | "24" | "32" | undefined;
            };
            icon: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
            iconActive: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
            active: BooleanConstructor;
        }>> & {
            onLoad?: ((image: import("../../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
        }, {
            isActive: import("vue").ComputedRef<boolean>;
        }, {}, {}, {}, {
            size: "12" | "16" | "20" | "24" | "32" | undefined;
            animationType: "type1" | "type2" | undefined;
            turn: boolean;
            disabled: boolean;
            hide: boolean;
            active: boolean;
            animationShow: boolean;
            overlay: boolean;
            dynamic: boolean;
            start: boolean;
            end: boolean;
            high: boolean;
            variation: "icon" | "payment" | "avatar" | "country" | undefined;
            shape: "circle" | "rect" | "box" | undefined;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        turn: BooleanConstructor;
        disabled: BooleanConstructor;
        hide: BooleanConstructor;
        animationType: {
            type: import("vue").PropType<"type1" | "type2" | undefined>;
            default: "type1" | "type2" | undefined;
        };
        animationShow: BooleanConstructor;
        overlay: BooleanConstructor;
        dynamic: BooleanConstructor;
        start: BooleanConstructor;
        end: BooleanConstructor;
        high: BooleanConstructor;
        variation: {
            type: import("vue").PropType<"icon" | "payment" | "avatar" | "country" | undefined>;
            default: "icon" | "payment" | "avatar" | "country" | undefined;
        };
        shape: {
            type: import("vue").PropType<"circle" | "rect" | "box" | undefined>;
            default: "circle" | "rect" | "box" | undefined;
        };
        size: {
            type: import("vue").PropType<"12" | "16" | "20" | "24" | "32" | undefined>;
            default: "12" | "16" | "20" | "24" | "32" | undefined;
        };
        icon: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
        iconActive: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
        active: BooleanConstructor;
    }>> & {
        onLoad?: ((image: import("../../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
    }, {
        isActive: import("vue").ComputedRef<boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        load: (image: import("../../constructors/Image/typesBasic").ImageEventData) => void;
    }, string, {
        size: "12" | "16" | "20" | "24" | "32" | undefined;
        animationType: "type1" | "type2" | undefined;
        turn: boolean;
        disabled: boolean;
        hide: boolean;
        active: boolean;
        animationShow: boolean;
        overlay: boolean;
        dynamic: boolean;
        start: boolean;
        end: boolean;
        high: boolean;
        variation: "icon" | "payment" | "avatar" | "country" | undefined;
        shape: "circle" | "rect" | "box" | undefined;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../../constructors/Icon/types").IconSlots> & import("../../constructors/Icon/types").IconSlots;
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
    argTypes: import("../../types/storybook").StorybookArgs;
    args: import("../../types/storybook").StorybookArgsValue;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Icon: Story;
export declare const IconList: Story;
