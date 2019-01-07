import { Template } from 'meteor/templating';

import './main.html';

Template.alert.onRendered(function initAlert(){
  $(".alert").hide();
});
