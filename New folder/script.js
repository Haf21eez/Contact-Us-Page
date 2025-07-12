document.getElementById('contactForm').addEventListener('submit',function(e){
    e.preventDefault();

    const name = document.getElementById('name' ).value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if( !name || !email || !subject || !message){
        alert("Please enter ful details");
        return;
    }
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
   alert('Thank you for contacting us, ' + name + '!');

   document.getElementById('contactForm').reset();


});