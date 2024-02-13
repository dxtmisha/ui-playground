import { type PropType } from 'vue';
import { type ImageProps } from '../Image/props.ts';
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type IconProps = {
    /**
     * The value of the icon or an object with all properties for the icon.<br>
     * Значение иконки или объект со всеми свойствами для иконки.
     */
    icon?: string | ImageProps;
    /**
     * The value of the active icon or an object with all properties for the active icon.
     * This icon is used when the 'active' property is enabled.<br>
     * Значение активной иконки или объект со всеми свойствами для активной иконки.
     * Эта иконка используется при включении свойства 'active'.
     */
    iconActive?: string | ImageProps;
    /**
     * Animated transition to the active icon.<br>
     * Анимированный переход на активную иконку.
     */
    active?: boolean;
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    animationType?: string | 'type1' | 'type2';
    animationShow?: boolean;
    overlay?: boolean;
    dynamic?: boolean;
    start?: boolean;
    end?: boolean;
    high?: boolean;
};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsIcon: IconProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsIcon: {
    turn: BooleanConstructor;
    disabled: BooleanConstructor;
    hide: BooleanConstructor;
    animationType: {
        type: PropType<string | undefined>;
        default: string | undefined;
    };
    animationShow: BooleanConstructor;
    overlay: BooleanConstructor;
    dynamic: BooleanConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    high: BooleanConstructor;
    icon: PropType<string | ImageProps | undefined>;
    iconActive: PropType<string | ImageProps | undefined>;
    active: BooleanConstructor;
};
