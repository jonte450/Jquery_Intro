/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;

navList = $('.nav-list');
first_elem = navList.children().first();
a_elem = first_elem.find('a');
a_elem.attr('href','#1');
