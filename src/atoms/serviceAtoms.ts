import { atom } from 'jotai';
import { Interpreter } from 'xstate';

type TServiceAtom = { [key: string]: Interpreter<any, any, any> };

export const serviceAtom = atom<TServiceAtom>({});

export const setServiceAtom = atom<
    null,
    { serviceKey: string; service: Interpreter<any, any, any> }
>(null, (get, set, { serviceKey, service }) => {
    set(serviceAtom, (services) => {
        return {
            ...services,
            [serviceKey]: service,
        };
    });
});
