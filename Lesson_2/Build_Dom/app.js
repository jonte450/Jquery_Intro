/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
var family_1, family_2,bruce,madison,hunter;
family_1 = $('#family1');
family_2 = $('<div id="family2"><h1>Family 2</h1></div>');
bruce = $('<div id="#bruce"><h2>Bruce</h2></div>');
hunter = $('<div id="#hunter"><h3>Hunter </h3></div>');
madison = $('<div id="#madison"><h3>Madison </h3></div>');
family_2.insertAfter(family_1);
family_2.append(bruce);
bruce.append(madison);
bruce.append(hunter);

