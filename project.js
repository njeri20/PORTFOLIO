//smooth scrolling 

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'

});
});
});

//Example: Form Validation(Basic)
const form= document.querySelector('form');
if(form){
    form.addEventListener('submit',function(event){
        let name=form.querySelector('input[type="text"]').value;
        let email=form.querySelector('input[type="email"]').value;
        if (!name||!email){
            event.preventDefault();
            alert('Please fill all fields.');
        }
    });
}