declare global {
  type Icons = {
    [key: string]:
      | React.ReactElement<string | React.JSXElementConstructor<any>>
      | any;
  };
}

export {};
