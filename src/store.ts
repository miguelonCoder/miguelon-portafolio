import type { Map } from 'maptalks';
import { atom, WritableAtom } from 'nanostores';

export const slide: WritableAtom<number> = atom(0);
export const titleSlide: WritableAtom<string> = atom('');
export const sharedMap: WritableAtom<Map> = atom(null)
export const isContacted: WritableAtom<boolean> = atom(false)