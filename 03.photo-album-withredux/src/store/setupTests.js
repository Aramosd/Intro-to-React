/* eslint-disable */
import raf from './tempPolyfills';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import LocalStorageMock from './localStorageMock';

Enzyme.configure({adapter: new Adapter()});

//Make enzyme functions available in all test files without importing
// GLOBAL = NAMESPACE DE LA CONFIGURACION GLOBAL PARA EL TEST RUNNER
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.localStorage = new LocalStorageMock();
global.renderer = renderer;

/*
    UN POLYFILL ES UNA FUNCION PARA COMPATIBILIDAD CON EXPLORERS VIEJOS
*/