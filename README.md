# PORTFOLIO

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width" initial-scale="1.0">
        <title> Njeri Macharia- Portfolio </title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact"> Contact</a></li>
                </ul>
            </nav>
        </header>
        <section id="home" class="hero">
            <div class="hero-content">
                <h1> Hello, I'm Njeri Macharia</h1>
                <p> A curious learner and developer</p>
                <a href="#portfolio" class="button"> View Portfolio</a>
            </div>
        </div>
        </section>
        <section id="portfolio" class="Portfolio">
            <h2> Portfolio</h2>
            <div class="projects">
            <div class="project">
                <img src="placeholder-project.jpg" alt="Project 1">
                <h3>Project 1</h3>
                <p> Sustainable Water Management Tracker
                    An eye opener for the public to hold officers accountable for distributing water in rural areas
                </p>
                <a href="project 1. html" class="button">View Project</a>
            </div>
            </div>
        </section>
        <section id="about" class="about">
            <h2> About Me</h2>
            <p> I enjoy learning new things and explorung the outdoors
                Profiecient in Research and Analytics
            </p>
        </section>
        <section id="contact" class="contact">
            <h2> Contact Me</h2>
            <form>
                <input type="text" placeholder="Njeri Macharia">
                <input type="email" placeholder="njerimacharia301@gmail.com">
                <button type="submit"> Send Message</button>
            </form>
        </section>

        <footer>
            <p> &copy; 2025 Njeri Macharia. All rights reserved</p>
        </footer>

        <script src="script.js"></script>
    </body>
</html>


body {
 font-family: sans-serif;
 margin:0;
 padding: 0;
 line-height: 1.6;
}

header {
background-color:grey;
padding: 20px;
}

nav ul{
    list-style: none;
    padding: 0;
    text-align: center;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav a {
    text-decoration: none;
    color: darkcyan;
}

.hero {
    background-color: bisque;
    text-align: center;
    padding: 100px 20px;
}
.hero-context{
    max-width: 800px;
    margin: 0 auto;
}
.button{
    display: inline-block;
    background-color: cadetblue;
    color: antiquewhite;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
}

.portfolio,.about,.contact{
    padding: 50px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.projects{
    display: grid;
    grid-template-columns: repeat(auto-fit, minimax(300px,1fr));
    gap: 20px;
}

.project{
    border: 1px solid #ddd;
    padding: 20px;
    text-align:center;
}

project img{
    max-width: 100%;
}

form input, form textarea{
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
}

footer{
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
}



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
