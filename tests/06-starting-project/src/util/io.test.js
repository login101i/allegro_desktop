import { it, expect } from 'vitest';

import writeData from './io';

it('should execute the writeFile method', () => {
  const testData = 'Test';
  const testFilename = 'test.txt';
  
  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});
 
vi.mock('fs');
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1]
      }
    }
  };
});

it('should execute the writeFile method', () => {
  const testData = 'Test';
  const testFilename = 'test.txt';

  writeData(testData, testFilename)

  // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});