import { type App, type Component } from 'vue';
import './types.d.ts';
export declare function registrationUiComponents(app: App): Promise<void>;
export declare function createUiComponents<A extends Component>(App: A): Promise<App<Element>>;
