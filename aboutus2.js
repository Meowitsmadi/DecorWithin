function bio(index) {
  var msg = "";
  if (index == 1){
    msg = "Hanna Nguyen, a 15 year old vietnamese-american girl, grew up in San Rafael of the Bay Area. She enjoys playing the piano, ukulele, and loves to sing. Her love for music has helped her throughout her life and kept her mentally stable. She hopes to one day attend college majoring in engineering, preferably environmental engineering. Girls Who Code has helped her narrow her interests to robotics and to the discovery of her love for collaboration and teamwork.";
  }
  if (index == 2){
    msg = "Shomili Madabhavi is a 16 year old who grew up in the Bay Area, more specifically Fremont. She enjoys hanging out with friends, watching Netflix, singing, and playing tennis. Ever since she was in middle school, she has been passionate about computer science. She grew up watching both of her parents code because they are both software engineers. Girls Who Code was the first time she was exposed to the tech world, and she loved it. Shomili will continue to work towards becoming a successful computer engineer, hopefully at Twitter.";
  }
  if (index == 3){
    msg = "Madison Kolley is a 15 year old half filipina girl who was born in SF but now lives in El Sobrante/Richmond area. Her hobbies include playing video games, reading, and singing. Her love for video games is what led her to want to pursue a tech career. Girls Who Code was her first introduction to coding and tech but, she already knows that she wants to major in Computer Science and later get involved in Game Development and Design. Now that her sister is going to college, she gets her own room and DecorWithin will hopefully help her with redesigning!";
  }
  if (index == 4){
    msg = "Fernanda Moura, a seventeen year old Brazilian girl who grew up in Brazil and moved to San Francisco last year. She is a senior at Mission High School, and enjoys going to Dolores Park after school to meditate with her friends. Her favorite classes are History and Art, but this summer she decided to explore more about CS. Girls Who Code has helped her make friends and to learn how to code, but also got her interested on designing websites using HTML, CSS and JavaScript.";
  }
  if (index == 5){
    msg = "Mia is a sixteen year old from Oakland. Her hobbies include music, swimming and dancing. She is in the computer academy at her high school, Oakland Technical. Mia also has an interest in sound engineering and design.";
  }
  document.getElementById("bio").innerHTML = msg;
}

function inspo(index){
  var text = "";
  if (index == 1){
    text = "As young girls hoping to create a functionable, home decor website, our number one inspiration for this project is Alison Pincus. Alison Pincus, founder of One Kings Lane and alumna of the University of California, Berkeley and Los Angeles, has helped to shape our vision into a reality. One Kings Lane is a home decor and furniture website. Like our website, it helps those who use the website to find their own personal look for their home.";
  }
  document.getElementById("inspo").innerHTML = text;
}
