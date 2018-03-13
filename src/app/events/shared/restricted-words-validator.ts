import { FormControl } from "@angular/forms";

// create a custom validator, which returns a function
export function restrictedWords(words) {
  return (control: FormControl): {[key: string]: any} => {
    // no error if there is no restricted words passed in
    if (!words) {
      return null;
    }

    // get an array of all the restricted words
    const invalidWords = words
      .map(word => control.value.includes(word) ? word : null)
      .filter(word => word !== null);

    // throw an error if there is any word in the invalidWords array
    return invalidWords && invalidWords.length > 0
      ? { 'restrictedWords': invalidWords.join(', ')}
      : null;
  };
}
