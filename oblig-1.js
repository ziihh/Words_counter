// Global variable / arrays
var text = [];
var words = [];
var count = [];
var sortedArray = [];
var countWords;

 /**
  * @brief It's text class that counts the amount of words, sort them and display innerhtml. 
  */
class Text {
    /**
     * @brief Some brief description.
     * @param input is id for an element in innerhtml.
     * @param output is id for an element in innerhtml.
     */
    constructor(input, output) {
        this.input = input;
        this.output = output;
    }
    
   /**
    * @brief Function split the text and add each words in the text array.
    */
     splitWords() {
        var temp = [];
        console.log(this.input);
    
        temp = document.getElementById(this.input).value.split(/[\n <>.,\?]/);
        for (var i = 0; i < temp.length; i++) { // loops through temp array. 
            text[i] = temp[i].toLowerCase(); // convert every word to lower case and store it in text[]
        }
    }

   /**
    * @brief Function counts how many times a word has appeared in the words array
        and add the count in the count array on the positon of word in words array.
    */
     countTheWords() {
        for (var i = 0; i < text.length; i++) { // loops through text array.
            var position = 0;
            if (this.foundWord(text[i])) { // if the word from text array exist in words array.
                position = this.found(text[i]); // Gets the position of the word in words array
                count[position] += 1; // Increase the counter with 1 at that position.
            } else {
                words.push(text[i].toLowerCase()); // Else add the word from text array to word array
                position = this.found(text[i]); //  Get the position of word in words array
                count[position] = 1; // Add 1 in the count array at the position.
            }
            console.log(words[i]);
        }
    }

    /**
     * @brief function search for arg in words array.
     * @param arg is word to be found in words array.
     * @return the index in words array.
     */
     found(arg) {
        for (var y = 0; y < words.length; y++) { // loop through words
            if (arg === words[y]) { // Checks if arg exist in words
                return y; // Return index (position) of arg in words
            }
        }
    }
    /**
     * @brief function search if arg exist in words array.
     * @param arg is word to be found in words array.
     * @return boolean if word exist in words array.
     */
     foundWord(arg) {
        for (var y = 0; y < words.length; y++) { // Loop through words
            if (arg === words[y]) { // Checks if arg exist in words
                return true; // return true if exist
            }
        }
        return false; // else return false
    }
    /**
     * @brief Sorts the words array and save the result words with counter in sortedArray.
     */
     arraySort() {
        var position = 0;
        var temp;
        temp = words.slice(); // temporary array
        temp.sort(); // sort the temp array
        for (var x = 0; x < temp.length; x++) { // Loop through temp array
            position = this.found(temp[x]); // find the position of each word in words array
            sortedArray[x] = temp[x] + " : " + count[position]; // Make an object and adds it in sortedArray
        }
        if (sortedArray[0].substr(0, 1) == " ") { // checking if substring is not empty string.     
            sortedArray.splice(0, 1); 
        }
    }
    /**
     * @brief Function will make h2 with word first letter and add all the words of that category under the h2 in p.
     */
     firstLetter() {
        var firstLetter;

        for (var i = 0; i < sortedArray.length; i++) { // Loop through sorted array.
            if (firstLetter != sortedArray[i].substr(0, 1)) { // if firstLetter is not same as firstLetter of word in sortedArray. 
                var h2 = document.createElement("h2"); 
                firstLetter = sortedArray[i].substr(0, 1); // getting i-th word's firtletter. 
                h2.innerHTML = firstLetter + "<br>"; 
                document.getElementById(this.output).appendChild(h2);

                for (var z = 0; z < sortedArray.length; z++) { // loops through sortedArray. 
                    if (firstLetter == sortedArray[z].substr(0, 1)) { // if firstLetter is equal to first letter of word in sortedArray. 
                        var p = document.createElement("p"); 
                        p.innerHTML += sortedArray[z] + "<br>";
                        document.getElementById(this.output).appendChild(p); 
                    }
                }
            }
        }

    }

    /* Function runs when the button is clicked */
    count() {
        t.splitWords(); // spilt words in text array
        t.countTheWords(); // count the occurence of each word in text array
        t.arraySort(); // sort the array and make object with counter + word
        t.firstLetter(); // display the first letter and all the words starting with same letter.
    }
}
// Object of Text
const t = new Text("textBox", "wordsContainer");

// Event handling of button 
document.getElementById("button").addEventListener("click", t.count);
