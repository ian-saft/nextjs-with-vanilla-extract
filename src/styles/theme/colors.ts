export type Colors = {
  [name: string]: {
    [code: number]: string;
  };
};

export const colors = {
  gray: {
    50: '#EEEEEE',
    500: '#393E46',
    950: '#232931',
  },
  green: {
    500: '#4ECCA3',
  },
} as const;
