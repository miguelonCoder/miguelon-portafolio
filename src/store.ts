import { atom, WritableAtom } from 'nanostores';

export const slide: WritableAtom<number> = atom(0);
export const titleSlide: WritableAtom<string> = atom('');