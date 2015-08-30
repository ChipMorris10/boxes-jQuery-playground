
// ----------- E X E R C I S E 1 -----------
// ----------- T A S K 1 -----------
$( document ).ready(function() {

console.log( "The document is ready!" );

// ----------- E X E R C I S E 2 -----------
// ----------- T A S K 1 -----------

// create a variable called secretBox from <id = secretBox>
// uncomment line 13 to get this to work
// var secretBox = $('#secretBox');

// call css to change background color
// call css to change text color so <h4> shows up
// secretBox.css( {
//   'background-color' : 'white',
//   'color' : 'black'
// });
// append <h4> text to the box
// uncomment line 24 to get this to work
// secretBox.append( "<h1>Secret box</h1");

// ----------- T A S K 2 -----------

// create a variable called childrenDivIdRow
// uncomment line 29 to get this to work
// var childrenDivIdRow = $('#row1');

// find all the child divs of first row
// set class to boxType3 for all
// call jQuery
// find row1
// .children finds all children of id=row1
// .removeClass removes the default class
// .attr with 'class' will add whatever is next
// uncomment line 39 to get this to work
// $('#row1').children().removeClass().attr('class', 'box boxType3');

// ----------- T A S K 3 -----------

// Make the last box in the last row disappear. (Hint, look into the dispaly style.  Also, you should only get back one element from your selector.).

// call jQuery
// find last row
// find children, last child, then hide
// uncomment line 49 to get this to work
// $('#row4').children().last().hide();

// ----------- T A S K 4 -----------

// Change all red boxes to white.
// class="boxType1"
// call jQuery
// find correct class
// call css and change background color
// uncomment line 59// uncomment line 29 to get this to work to get this to work
// $('.boxType1').css('background-color', 'white');

// ----------- T A S K 5 -----------

// Get the first two divs in the second row.  Take away all styling from the divs.
// call jQuery
// find #row2
// find div, less than 2
// use css to make them invisible
// uncomment line 69 to get this to work
// $('#row2 div:lt(2)').css('visibility', 'hidden');


// ----------- T A S K 6 -----------

// Get all divs inside the container that are not row divs and are not the secret box div.  Set the width of the divs to 2 pixels.
// call jQuery
// find divs .box, excluding secretBox
// change width to 2px
// uncomment line 79 to get this to work
// $('.box').not(secretBox).css('width', '2px');


// ----------- E X E R C I S E 3 -----------
// ----------- T A S K 1 -----------

// Add an on click handler to the container div.  Console log the x and y position of the click.
// call jQuery
// find #container
// on click
// console.log the x & y coordinates
// uncomment lines 91-94 to get this to work
// $('#container').on('click', function(event) {
//   console.log(event.pageX);
//   console.log(event.pageY);
// });

// ----------- T A S K 2 -----------

 // Add links inside all red box divs that take the user to galvanize.  Then add an on click handler that alerts the user that you can never leave the page.  Make sure the user won't leave the page after the alert!
// call jQuery
// find .boxType1, and link them to Galvanize.com
// when the user clicks the link, send an alert
// telling them they can't leave the page
// uncomment lines 104-107 to get this to work
// $('.boxType1').html('<a href="http://www.galvanize.com/">Galvanize</a>').on('click', function () {
//     event.preventDefault();
//     alert("You can never leave this page!");
// });


// ----------- T A S K 3 -----------

// For all box divs, add a click handler that adds an image of a cute puppy to the box.  If the image is clicked again, remove the cute puppy.
// call jQuery
// find all .box divs
// add on click function
// append an immage so that when the box is clicked the image shows up
// fit the image to the box size
// uncomment lines 119-122 to get this to work
// $('.box').on('click',function() {
//   $(this).append('<img src="http://www.bestinspired.com/wp-content/uploads/2015/03/Guide-Dogs_025-11.jpg">');
//   $('img').css({'height': '93%','width': "94%"});
// });

// call jQuery
// find all .box divs
// add on click function
// I didn't figure this one out on my own. I copied it from Luis
// uncomment lines 129-132 to get this to work
// $('.box').on('click', 'img', function(event) {
//   event.stopPropagation();
//   $(this).remove();
// });

// ----------- T A S K 4 -----------

// Write a click handler __on the conatainer div__.  The click handler should turn the container background to black and the background of the original div that was clicked to white.  If the user original div that was clicked happened to be the container div, change the background of the container div to lime green.  You __should not__ use any selectors for this exercise.  You can do it completely with what is given to you in the event callback.

// call jQuery
// find #container
// add on click function
// if id equals container (where the mouse was clicked)
// turn background to limegreen
// uncomment lines 144-147 & 154-158 to get this to work
// $('#container').on('click', function(event) {
//   if(this.id === 'container') {
//     $(this).css('background-color', 'limegreen');
// }

// if the mouse was clicked in .box
// set background color to black
// I had difficulty with this and had to see what others were doing for my answer
// uncomment lines 144-147 & 154-158 to get this to work
//   if ($(event.target).hasClass('box')) {
//     $(event.target).css('background-color', 'white');
//     $(this).css('background-color', 'black');
//   }
// });


}); // end document function