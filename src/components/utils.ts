export const watchPropNames: string[] = [
  'selection',
  'mainMenuBar',
  'navigationBar',
  'statusBar',
  'askToFormat',
  'readOnly',
  'indentation',
  'tabSize',
  'escapeControlCharacters',
  'escapeUnicodeCharacters',
  'flattenColumns',
  'validator',
  'onClassName',
  'onRenderValue',
  'onRenderMenu',
];

export const propNames: string[] = [
  'selection',
  'mode',
  'mainMenuBar',
  'navigationBar',
  'statusBar',
  'askToFormat',
  'readOnly',
  'indentation',
  'tabSize',
  'escapeControlCharacters',
  'escapeUnicodeCharacters',
  'flattenColumns',
  'validator',
  'parser',
  'validationParser',
  'pathParser',
  'onClassName',
  'onRenderValue',
  'onRenderMenu',
];

export const pickDefinedProps = (options: Record<string, any> = {}, props: Record<string, any>) => {
  const computedProps: Record<string, any> = {};

  for (const propName of propNames) {
    const prop =
      props[propName as keyof typeof props] !== undefined
        ? props[propName as keyof typeof props]
        : options[propName as keyof typeof options];
    if (prop !== undefined) {
      computedProps[propName as keyof typeof computedProps] = prop;
    }
  }

  return computedProps;
};

export const fullWidthIcon: string = `
  <svg 
    class="fa-icon svelte-1dof0an" 
    viewBox="0 0 1024 1024" 
    version="1.1"
     xmlns="http://www.w3.org/2000/svg" 
     p-id="1927" xmlns:xlink="http://www.w3.org/1999/xlink" 
     width="24" 
     height="24"
  >
    <path d="M63.989383 105.442494l0 268.396843c0 18.935258 15.368012 34.304294 34.304294 34.304294 18.936281 0 34.304294-15.369036 34.304294-34.304294L132.597971 180.156126l218.107483 218.176045c12.82919 12.830213 33.618679 12.830213 46.515407 0 12.830213-12.897751 12.830213-33.686217 0-46.51643l-218.176045-218.107483 193.683211 0c18.935258 0 34.304294-15.369036 34.304294-34.304294 0-18.935258-15.369036-34.304294-34.304294-34.304294L104.331183 65.09967C79.288834 65.09967 63.989383 77.999468 63.989383 105.442494L63.989383 105.442494z" p-id="1928" fill="#e6e6e6"></path><path d="M917.688719 65.09967 649.290853 65.09967c-18.935258 0-34.304294 15.369036-34.304294 34.304294 0 18.936281 15.369036 34.304294 34.304294 34.304294l193.683211 0-218.176045 218.107483c-12.830213 12.82919-12.830213 33.618679 0 46.51643 12.897751 12.830213 33.686217 12.830213 46.515407 0L889.420909 180.156126l0 193.683211c0 18.935258 15.369036 34.304294 34.304294 34.304294 18.936281 0 34.304294-15.369036 34.304294-34.304294L958.029496 105.442494C958.029496 77.999468 942.79963 65.09967 917.688719 65.09967L917.688719 65.09967z" p-id="1929" fill="#e6e6e6"></path>
    <path d="M104.331183 957.013353l268.397866 0c18.935258 0 34.304294-15.368012 34.304294-34.304294 0-18.936281-15.369036-34.304294-34.304294-34.304294L179.045839 888.404766l218.176045-218.107483c12.830213-12.82919 12.830213-33.618679 0-46.515407-12.897751-12.830213-33.686217-12.830213-46.515407 0l-218.107483 218.176045L132.598994 648.27471c0-18.935258-15.368012-34.304294-34.304294-34.304294-18.936281 0-34.304294 15.369036-34.304294 34.304294l0 268.397866C63.989383 944.115602 79.288834 957.013353 104.331183 957.013353L104.331183 957.013353z" p-id="1930" fill="#e6e6e6"></path>
    <path d="M958.029496 916.671553 958.029496 648.27471c0-18.935258-15.368012-34.304294-34.304294-34.304294-18.935258 0-34.304294 15.369036-34.304294 34.304294l0 193.683211L671.313425 623.781876c-12.82919-12.830213-33.618679-12.830213-46.515407 0-12.830213 12.897751-12.830213 33.686217 0 46.515407l218.176045 218.107483L649.290853 888.404766c-18.935258 0-34.304294 15.368012-34.304294 34.304294 0 18.936281 15.369036 34.304294 34.304294 34.304294l268.397866 0C942.79963 957.013353 958.029496 944.115602 958.029496 916.671553L958.029496 916.671553z" p-id="1931" fill="#e6e6e6"></path>
  </svg>
`;

export const hasProp = <T>(obj: any, propertyName: keyof T, isWarning = false): obj is T => {
  const resolve = obj && typeof obj[propertyName] !== 'undefined';
  if (!resolve && isWarning) {
    console.warn('Typeguard warn!!! The object has no property: ', propertyName);
  }
  return resolve;
};
