import { type ComputedRef, type PropType } from 'vue';
import { type ProgressProps } from '../../Progress/props';
export type UseEnabledSetup = {
    /**
     * Property to determine that the item is disabled.<br>
     * Свойство для определения, что элемент выключен.
     */
    disabledBind: ComputedRef<boolean | undefined>;
    /**
     * Checking for the status of the element’s activity.<br>
     * Проверка на статус активности элемента.
     */
    isEnabled: ComputedRef<boolean>;
    /**
     * Checks for read-only status.<br>
     * Проверяет на статус только для чтения.
     */
    isReadonly: ComputedRef<boolean>;
    /**
     * Checks if the element is turned off.<br>
     * Проверяет, выключен ли элемент.
     */
    isDisabled: ComputedRef<boolean>;
    /**
     * Checks for the presence of an element for loading.<br>
     * Проверяет наличие элемента для загрузки.
     */
    isProgress: ComputedRef<boolean>;
};
export type UseEnabledProps = {
    /**
     * Enable or disable the loader, or an object with properties for the loader.<br>
     * Включить или отключить загрузчик, или объект со свойствами для загрузчика.
     */
    loading?: boolean | ProgressProps;
    /**
     * Enable read-only status.<br>
     * Включить статус только для чтения.
     */
    readonly?: boolean;
    /**
     * Enable the item disable status.<br>
     * Включить статус отключения элемента.
     */
    disabled?: boolean;
};
export declare const usePropsEnabled: {
    progress: PropType<boolean | ProgressProps | undefined>;
    readonly: BooleanConstructor;
    disabled: BooleanConstructor;
};
/**
 * Use to control the activity of the item.<br>
 * Использование для управления активности элемента.
 * @param props input property /<br>входное свойство
 */
export declare const useEnabled: (props: UseEnabledProps) => UseEnabledSetup;
