var prompt = require('prompt-sync').prompt;
var start = new Date();

var total = 15, numCorrect = 0, temp, htmlQ = 0, cssQ = 0, jsQ = 0, totalH = 4, totalC = 6, totalJ = 6;
var wrongMsg = 'Incorrect, the answer was ' , correctMsg = 'Great Job! That is correct!';

console.log('What is your name?');
var user = prompt().toUpperCase();
console.log('Welcome ' + user + '!');

console.log('1. What is the default display type for a <div> in HTML? a. float b. block c. inline-block');
temp = prompt().toLowerCase();
temp === 'b' ? (console.log(correctMsg), numCorrect++, htmlQ++) : console.log(wrongMsg + 'b');

console.log('2. What is the correct way to select a class in CSS? a. .class b. #class c. $class');
temp = prompt().toLowerCase();
temp === 'a' ? (console.log(correctMsg), numCorrect++, cssQ++) : console.log(wrongMsg + 'a');

console.log('3. How do you declare a variable in JavaScript? a. var name; b. var = name; varable name;');
temp = prompt().toLowerCase();
temp === 'a' ? (console.log(correctMsg), numCorrect++, jsQ++) : console.log(wrongMsg + 'a');

console.log('4. Roughly how many px is an em equivalent to?');
temp = prompt();
temp === '16' ? (console.log(correctMsg), numCorrect++, jsQ++) : console.log(wrongMsg + '16');

console.log('5. True or false, when linking CSS into HTML you insert the link in the body of your HTML.');
temp = prompt().toLowerCase();
temp === 'false' ? (console.log(correctMsg), numCorrect++, cssQ++, htmlQ++) : console.log(wrongMsg + 'false');


if (numCorrect/5 < 0.4) {
	console.log('what is your favorite color?');
	temp = prompt().toLowerCase();
	console.log('Your favorite color is ' + temp)
	console.log('You completed 5 questions for a score of ' + Math.round((numCorrect/5) * 100) + '%')
} else {
	console.log('6. What will this expression evaluate to? \'9\' + 10');
	temp = prompt();
	temp === '910' ? (console.log(correctMsg), numCorrect++, jsQ++) : console.log(wrongMsg + '910');
	
	console.log('7. True or False, count++; is equivalent to count = count + 1;?');
	temp = prompt().toLowerCase();
	temp === 'true' ? (console.log(correctMsg), numCorrect++, jsQ++) : console.log(wrongMsg + 'a');
	
	console.log('8. How do you select an id css? a. .id b. &id c. #id')
	temp = prompt().toLowerCase();
	temp === 'c' ? (console.log(correctMsg), numCorrect++, cssQ++, htmlQ++) : console.log(wrongMsg + 'c');
	
	console.log('9. What is the correct tag to use in order to insert a picture into your HTML?'
		+ ' a. <img src> b. <picture> c. <a>')
	temp = prompt().toLowerCase();
	temp === 'a' ? (console.log(correctMsg), numCorrect++, htmlQ++) : console.log(wrongMsg + 'a');
	
	console.log('10. True or False, in SASS for CSS you are able to declare variables?')
	temp = prompt().toLowerCase();
	temp === 'true' ? (console.log(correctMsg), numCorrect++, cssQ++) : console.log(wrongMsg + 'a');
	
	console.log('11. To change the background color of the <body> to red which style command can you use? ' 
		+ 'a. color: red; b. style-color: red; c. background-color: red;')
	temp = prompt().toLowerCase();
	temp === 'c' ? (console.log(correctMsg), numCorrect++, cssQ++) : console.log(wrongMsg + 'c');
	
	console.log('12. Math.ceil(4.3) In JavaScript will... a. round up to 10 b. round down to 1 c. round up to 5')
	temp = prompt().toLowerCase();
	temp === 'c' ? (console.log(correctMsg), numCorrect++, cssQ++) : console.log(wrongMsg + 'c');
	
	console.log('13. var x = 10; x = 20; What will the value of x evaluate to?')
	temp = prompt();
	temp == 20 ? (console.log(correctMsg), numCorrect++, jsQ++) : console.log(wrongMsg + 20);
	
	console.log('14. Which of these is a primitive type in JavaScript? a. string b. text c. paragraph')
	temp = prompt().toLowerCase();
	temp === 'a' ? (console.log(correctMsg), numCorrect++, jsQ++) : console.log(wrongMsg + 'a');
	
	console.log('15. What does the folowing code select in CSS? section > div....' 
		+ 'a. all ancestor div in section b. only direct decendent div of section c. all div in html file')
	temp = prompt().toLowerCase();
	temp === 'b' ? (console.log(correctMsg), numCorrect++, cssQ++) : console.log(wrongMsg + 'b');
	
	var end = new Date();
	end = end - start;
	
console.log(user + ' you answered ' + numCorrect + ' questions correctly for a score of ' 
	+ Math.round((numCorrect/total) * 100) + '%.' + ' You took ' + (end * 0.001).toFixed(2) + ' seconds to complete the quiz.')
	
	if (htmlQ/totalH < 0.5) {
		console.log('You missed ' + (totalH - htmlQ) + ' out of ' + totalH + ' HTML Questions... You need to brush up' )
	} else {
		console.log('You did great in the HTML catogory questions!')
	}

	if (cssQ/totalC < 0.5) {
		console.log('You missed ' + (totalC - cssQ) + ' out of ' + totalC + ' CSS Questions... You need to brush up' )
	} else {
		console.log('You did great in the CSS catogory questions!')
	}

	if (jsQ/totalJ < 0.5) {
		console.log('You missed ' + (totalJ - jsQ) + ' out of ' + totalJ + ' JavaScript Questions... You need to brush up' )
	} else {
		console.log('You did great in the JavaScript catogory questions!')
	}
}
console.log('Thanks for taking the quiz!');