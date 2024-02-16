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
    rounded: import("vue").PropType<"none" | "standard" | "sm" | "md" | "lg" | "full" | "xl" | "2xl" | undefined>;
    size: import("vue").PropType<"sm" | "md" | "lg" | "xs" | "xl" | undefined>;
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
    rounded: import("vue").PropType<"none" | "standard" | "sm" | "md" | "lg" | "full" | "xl" | "2xl" | undefined>;
    size: import("vue").PropType<"sm" | "md" | "lg" | "xs" | "xl" | undefined>;
    icon: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
    iconActive: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
    active: BooleanConstructor;
}>> & {
    onLoad?: ((image: import("../../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
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
}, {}>, Readonly<IconSlots> & IconSlots>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
