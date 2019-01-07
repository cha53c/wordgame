import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
//  this.counter = new ReactiveVar(0);
//});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

//Template.hello.events({
//  'click button'(event, instance) {
    // increment the counter when button is clicked
//    instance.counter.set(instance.counter.get() + 1);
//  },
//});


Template.guess.onCreated(function guessOnCreated() {

});


Template.alert.onRendered(function initAlert(){
  $(".alert").hide();
});


Template.guess.helpers({
  counter() {
    return Template.instance().counter.get();
  },

});

Template.guess.events({
  'click button'(event, instance) {
    // submit guess
    instance.counter.set(instance.counter.get() + 1)
  },
  'submit .wordguess'(event){
    console.log("submit");
    event.preventDefault();
    const target = event.target;
    const text = target.text.value;
    console.log(text);
    if (text == 'abc'){
      console.log('correct');
      $(".alert").show();
      //var classlist = $(".alert").classList;
      //console.log(classlist);
      //$(".alert").classList.remove('hide');

    } else {
      $(".alert").hide();

      console.log("try again");
    }

  },
});

Template.alert.helpers({
  message: "Well Done! You are correct."
});

Template.grid.helpers({
  letters: [
    {letter: "a"},
    {letter: "b"},
    {letter: "c"},
    {letter: "d"},
    {letter: "e"},
    {letter: "f"},
    {letter: "g"},
    {letter: "h"},
    {letter: "i"},
  ],
});
