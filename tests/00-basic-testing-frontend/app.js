import { formDataArray } from "./src/util/formDataArray.js";
import { calculateResult } from "./src/util/calculateResult.js";
import { resultText, outputResult } from "./src/util/resultText.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();

  const numberInputs = formDataArray(form);

  const result = calculateResult(numberInputs);
  const finalResult = resultText(result);

  outputResult(finalResult);
}

form.addEventListener("submit", formSubmitHandler);
