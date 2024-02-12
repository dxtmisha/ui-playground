import type { StoryObj } from '@storybook/vue3';
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
            rounded: import("vue").PropType<"none" | "standard" | "sm" | "md" | "lg" | "xl" | "full" | "2xl" | undefined>;
            size: import("vue").PropType<"sm" | "md" | "lg" | "xl" | "xs" | undefined>;
            icon: import("vue").PropType<string | import("../../constructors/Image/props.ts").ImageProps | undefined>;
            iconActive: import("vue").PropType<string | import("../../constructors/Image/props.ts").ImageProps | undefined>;
            active: BooleanConstructor;
        }>> & {
            onLoad?: ((image: import("../../constructors/Image/typesBasic.ts").ImageEventData) => any) | undefined;
        }, {
            isActive: import("vue").ComputedRef<boolean>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            load: (image: import("../../constructors/Image/typesBasic.ts").ImageEventData) => void;
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
            rounded: import("vue").PropType<"none" | "standard" | "sm" | "md" | "lg" | "xl" | "full" | "2xl" | undefined>;
            size: import("vue").PropType<"sm" | "md" | "lg" | "xl" | "xs" | undefined>;
            icon: import("vue").PropType<string | import("../../constructors/Image/props.ts").ImageProps | undefined>;
            iconActive: import("vue").PropType<string | import("../../constructors/Image/props.ts").ImageProps | undefined>;
            active: BooleanConstructor;
        }>> & {
            onLoad?: ((image: import("../../constructors/Image/typesBasic.ts").ImageEventData) => any) | undefined;
        }, {
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
            rounded: import("vue").PropType<"none" | "standard" | "sm" | "md" | "lg" | "xl" | "full" | "2xl" | undefined>;
            size: import("vue").PropType<"sm" | "md" | "lg" | "xl" | "xs" | undefined>;
            icon: import("vue").PropType<string | import("../../constructors/Image/props.ts").ImageProps | undefined>;
            iconActive: import("vue").PropType<string | import("../../constructors/Image/props.ts").ImageProps | undefined>;
            active: BooleanConstructor;
        }>> & {
            onLoad?: ((image: import("../../constructors/Image/typesBasic.ts").ImageEventData) => any) | undefined;
        }, {
            isActive: import("vue").ComputedRef<boolean>;
        }, {}, {}, {}, {
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
        rounded: import("vue").PropType<"none" | "standard" | "sm" | "md" | "lg" | "xl" | "full" | "2xl" | undefined>;
        size: import("vue").PropType<"sm" | "md" | "lg" | "xl" | "xs" | undefined>;
        icon: import("vue").PropType<string | import("../../constructors/Image/props.ts").ImageProps | undefined>;
        iconActive: import("vue").PropType<string | import("../../constructors/Image/props.ts").ImageProps | undefined>;
        active: BooleanConstructor;
    }>> & {
        onLoad?: ((image: import("../../constructors/Image/typesBasic.ts").ImageEventData) => any) | undefined;
    }, {
        isActive: import("vue").ComputedRef<boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        load: (image: import("../../constructors/Image/typesBasic.ts").ImageEventData) => void;
    }, string, {
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
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../../constructors/Icon/types.ts").IconSlots> & import("../../constructors/Icon/types.ts").IconSlots;
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
export declare const Icon: Story;
