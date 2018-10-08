export function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.vowelCount = this.countVowels();
  this.consonantCount = this.countConsonants();
  this.wordCount = this.countWords();
  this.teaser = this.getTeaser();
}

Entry.prototype.countWords = function() {
  var wordsArr = this.body.split(' ');
  return wordsArr.length;
};

Entry.prototype.countVowels = function() {
  var charArray = this.body.split('');
  var filteredArray = charArray.filter(char => isVowel(char));
  return filteredArray.length;
};

Entry.prototype.countConsonants = function() {
  var charArray = this.body.split('');
  var filteredArray = charArray.filter(char => isConsonant(char));
  return filteredArray.length;
};

Entry.prototype.getTeaser = function() {
  var stringArray = this.body.split('.');
  var firstSentenceArray = stringArray[0].split(' ');
  var returnSentence = "";
  if (firstSentenceArray.length > 8) {
    for (var i = 0; i < 8; i++) {
      returnSentence += firstSentenceArray[i];
    }
  } else {
    returnSentence = firstSentenceArray.join(' ');
  }
  return returnSentence;
};

function isVowel(char) {
  var regex = /[a,e,i,o,u,y]/;
  return regex.test(char);
}

function isConsonant(char) {
  var regex = /[^a,e,i,o,u,y]/;
  return regex.test(char);
}


