import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            visible: BooleanConstructor;
            border: BooleanConstructor;
            inverse: BooleanConstructor;
            tag: {
                type: import("vue").PropType<string>;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            visible: BooleanConstructor;
            border: BooleanConstructor;
            inverse: BooleanConstructor;
            tag: {
                type: import("vue").PropType<string>;
                default: string;
            };
        }>>, {
            tag: string;
            inverse: boolean;
            visible: boolean;
            border: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            visible: BooleanConstructor;
            border: BooleanConstructor;
            inverse: BooleanConstructor;
            tag: {
                type: import("vue").PropType<string>;
                default: string;
            };
        }>>, {}, {}, {}, {}, {
            tag: string;
            inverse: boolean;
            visible: boolean;
            border: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        visible: BooleanConstructor;
        border: BooleanConstructor;
        inverse: BooleanConstructor;
        tag: {
            type: import("vue").PropType<string>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        tag: string;
        inverse: boolean;
        visible: boolean;
        border: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../../constructors/Scrollbar/types").ScrollbarSlots> & import("../../constructors/Scrollbar/types").ScrollbarSlots;
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
export declare const Scrollbar: Story;
