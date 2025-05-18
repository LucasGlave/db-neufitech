const inputString = `[
    [
      {
        text: 'vos',
        bg: 'bg-darkYellow',
        image: { src: '/pictograms/tú_4.webp', add: '' },
        speakText: 'vos'
      }
    ]
  ]`;

// Replace single quotes with double quotes to make it valid JSON
const validJsonString = inputString.replace(/'/g, '"');

// Parse the string into a JavaScript object
const parsedObject = JSON.parse(validJsonString);

// Example: Accessing the first item's text
console.log(parsedObject[0][0].text); // Output: "vos"

// Example: Accessing the image source
console.log(parsedObject[0][0].image.src); // Output: "/pictograms/tú_4.webp"
