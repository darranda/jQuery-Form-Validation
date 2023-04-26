
//Make sure the function loaded after the DOM
//Create a function that will fire when the submit <button> is clicked

    $(function() {
        $('#submit').on("click",function(event) {
            event.preventDefault();

 //create an array named required
    let name = $('#name');
    let phone = $('#phone');
    let email = $('#email');
    let required = [name, phone, email];
    
//Utilize a for loop to iterate of the entire required array
//use an if statement to check the value of each array item
   for (let i = 0; i < required.length; i++) {
    let field = required[i];

/*if the array item is equal to an empty string ("")populate the message <p> with the following text:
"Please Fill Out Required Fields"*/
    if (field.val() === "") {
         let message = $('<p>').text ('Please Fill Out Required Fields')

//add the warning class to this message
         message.addClass ('warning');
        field.after(message);
    
    
//once the field has something other than a blank string. make sure the warning class is removed
   } else {
        field.prev('label').removeClass('warning');
      }
   
   

/*utilize another if statement verify that no <label>'s have the warning class
if true remove the form from the DOM*/ 

   if  (field.val() !== "") {
   this.form.remove();
   
//manipulate the <h2> to say: "Thanks for your feedback!"
   $('<h3>').text('Thanks for your feedback!').appendTo ('body');

} 
   }
});
});
   
