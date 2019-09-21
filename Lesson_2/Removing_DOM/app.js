/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems,erase;

articleItems = $('.article-item');
erase = articleItems.find('ul');
erase.remove();
