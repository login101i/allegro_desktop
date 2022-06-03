import { extractNumbers } from "../parser.js";

export function formDataArray(form) {

  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);

  return numberInputs;
}
