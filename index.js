// Define a Function That Uses a Parameter
function introduction (name) {
    return `Hi, my name is ${name}.`; 
}

console.log(introduction("John"));

// Define a Function That Uses Two Parameters
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Define a Function That Uses an Optional Parameter
function introductionWithLanguageOptional(name, language = "JavaScript") { // second parameter, language, has a default value of JavaScript
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional("Jenifer")); // output: Hi, my name is Jenifer and I am learning to program in JavaScript
console.log(introductionWithLanguageOptional("Jenifer", "Python")); // output: Hi, my name is Jenifer and I am learning to program in Python
