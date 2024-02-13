/**
 * We get the settings object for the theme.<br>
 * Получаем объект настроек для темы.
 * @param title name for the button /<br>название для кнопки
 */
export declare const theme: (title?: string) => {
    defaultValue: string;
    toolbar: {
        title: string;
        icon: string;
        items: string[];
        dynamicTitle: boolean;
    };
};
/**
 * We get the settings object for language selection.<br>
 * Получаем объект настроек для выбора языка.
 * @param title name for the button /<br>название для кнопки
 * @param items list of languages /<br>список языков
 */
export declare const language: (title?: string, items?: string[]) => {
    defaultValue: import("vue").ComputedRef<string>;
    toolbar: {
        title: string;
        icon: string;
        items: string[];
        dynamicTitle: boolean;
    };
};
