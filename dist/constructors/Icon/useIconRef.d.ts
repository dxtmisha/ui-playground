import { type ComputedRef, type PropType, type VNode } from 'vue';
import { DesignComponents } from '../../classes/design/DesignComponents';
import { type IconProps } from './props';
export type UseIconComponent = {
    icon?: object;
};
export type UseIconSetup = {
    /**
     * Property for the base icon.<br>
     * Свойство для базовой иконки.
     */
    iconBind: ComputedRef<IconProps>;
    /**
     * Property for the additional icon.<br>
     * Свойство для дополнительной иконки.
     */
    trailingBind?: ComputedRef<IconProps>;
    /**
     * Is the activity status enabled.<br>
     * Включен ли статус активности.
     */
    isIcon: ComputedRef<boolean>;
    /**
     * Method for rendering the icon component.<br>
     * Метод для рендеринга компонента иконки.
     */
    renderIcon(): VNode[];
};
export type UseIconProps = {
    /**
     * Property for the base icon.<br>
     * Свойство для базовой иконки.
     */
    icon?: string | IconProps;
    /**
     * Enables the selection state, translates the base icon into an active state.<br>
     * Включает состояние выделения, переводит базовую иконку в активное состояние.
     */
    selected?: boolean;
    /**
     * Flip the icon. The additional icon is rotated, or the base one if there is no additional one.<br>
     * Перевернуть иконку. Поворачивается дополнительная иконка или базовая, если дополнительной нет.
     */
    iconTurn?: boolean;
    /**
     * Hides the base icon.<br>
     * Скрывает базовую иконку.
     */
    iconHide?: boolean;
};
export type UseIconTrailingProps = UseIconProps & {
    /**
     * Property for the additional icon.<br>
     * Свойство для дополнительной иконки.
     */
    iconTrailing?: UseIconProps['icon'];
};
export declare const usePropsIcon: {
    icon: PropType<string | IconProps | undefined>;
    selected: BooleanConstructor;
    iconTurn: BooleanConstructor;
    iconHide: BooleanConstructor;
};
export declare const usePropsIconTrailing: {
    iconTrailing: PropType<string | IconProps | undefined>;
    icon: PropType<string | IconProps | undefined>;
    selected: BooleanConstructor;
    iconTurn: BooleanConstructor;
    iconHide: BooleanConstructor;
};
/**
 * The function returns data for working with the Icon component.<br>
 * Функция возвращает данные для работы с компонентом Icon.
 * @param props input parameter /<br>входной параметр
 * @param components object for working with components /<br>объект для работы с компонентами
 * @param classIcon class name for the component /<br>название класса для компонента
 * @param classIconTrailing class for the second icon /<br>класс для второй иконки
 */
export declare const useIconRef: <COMP extends UseIconComponent, P extends UseIconTrailingProps>(props: P, components?: DesignComponents<COMP, P> | undefined, classIcon?: string, classIconTrailing?: string) => UseIconSetup;
