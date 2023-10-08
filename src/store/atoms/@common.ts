import type { ToastItem } from 'types/@common';
import { atom } from 'recoil';

export const toastListState = atom<ToastItem[]>({
  key: 'toasts',
  default: [],
});
