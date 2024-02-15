import { type App, type Component } from 'vue';
import './types.d.ts';
import './../c2/icons.ts';
export declare function registrationUiComponents(app: App): void;
export declare function createUiComponents<A extends Component>(App: A): App<Element>;
