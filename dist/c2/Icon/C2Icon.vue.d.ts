import { type IconSlots } from '../../constructors/Icon/types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
        type: import("vue").PropType<"icon" | "country" | "avatar" | "payment" | undefined>;
        default: "icon" | "country" | "avatar" | "payment" | undefined;
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
}, {
    isActive: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: (image: import("../../constructors/Image/typesBasic").ImageEventData) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<"icon" | "country" | "avatar" | "payment" | undefined>;
        default: "icon" | "country" | "avatar" | "payment" | undefined;
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
    variation: "icon" | "country" | "avatar" | "payment" | undefined;
    shape: "circle" | "rect" | "box" | undefined;
}, {}>, Readonly<IconSlots> & IconSlots>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
