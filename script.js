document.getElementById('contactForm').addEventListener('submit',function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
     const contactnumber = document.getElementById('contactnumber').value;
    const message = document.getElementById('message').value;
   

    if(name && email && contactnumber && message)
{
    console.log('Form Submitted Succesfully');
    console.log('Name:',name);
    console.log('Email:',email);
    console.log('contactnumber:',contactnumber);
    console.log('Message:',message);
   

    alert('Form submitted! Check the console for the data.');
    document.getElementById('contactForm').reset();


}else{
    alert('Please fill in all fields.');
}

});