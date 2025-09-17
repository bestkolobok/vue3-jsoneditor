export const getElement = (parentEl: HTMLElement, selector: string): HTMLElement | null => parentEl.querySelector(selector);

export const createElement = (tagName: string): HTMLElement => window?.document.createElement(tagName);
