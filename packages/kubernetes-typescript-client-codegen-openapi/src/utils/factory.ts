import ts from 'typescript';

const originalFactory = ts.factory;

export const factory = {
  ...originalFactory,
};
