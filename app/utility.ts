function getInputValue(elementID: string): string {
  let InputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );

  return InputElement.value;
}

function logger(message: string): void {
  console.log(message);
}

export { getInputValue as getValue, logger };
