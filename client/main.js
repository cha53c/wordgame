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
  // counter starts at 0
  this.counter = new ReactiveVar(0);
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
