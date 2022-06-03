import { cleanNumbers , add} from "../math.js";

export function calculateResult(numberInputs) {
  let result = "";
  try {
    const numbers = cleanNumbers(numberInputs);

    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  return result;
}
