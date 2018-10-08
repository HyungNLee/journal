import { Entry } from './entry';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var entries = [];

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var content = $('#content').val();
    var entry = new Entry(title, content);
    entries.push(entry);
    display();
  });
});

var display = function() {
  $("#entries").html("");
  entries.forEach(function(entry) {
    $("#entries").append("<div><h3>Title: " + entry.title + ".</h3><p>Teaser: " + entry.teaser + ".</p><p>Word Count: " + entry.wordCount + ".</p><p>Vowel Count: " + entry.vowelCount + ".</p><p>Consonant Count: " + entry.consonantCount + ".</p></div>");
  });
};