export const getElement = (selector: string): HTMLElement | null => document.querySelector(selector);

export const createElement = (tagName: string): HTMLElement => document.createElement(tagName);
