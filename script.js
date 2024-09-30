const portfolioData = {
  personalInfo: {
      name: "Muhammad Saad",
      role: "Full Stack Developer",
      passion: "Artificial Intelligence",
      university: "ITU University", description: `I am a student currently studying at ITU University, where my passion for programming 
      and problem-solving has led me to focus on honing my skills in C++. I thoroughly enjoy the 
      process of using programming languages to solve complex problems and find innovative solutions.
      To further enhance my abilities, I actively participate in online coding platforms like 
      HackerRank, where I engage in various coding challenges and contests.`,
socialLinks: {  github: "https://github.com/MSJUJ",
  linkedin: "https://www.linkedin.com/in/muhammad-saad-5315a6266/",
  instagram: "#",
  twitter: "#"
}
},
services: [
  {
      title: "Web Developer",
      description: 'I am currently give you service of HTML, CSS, Javascript, React'
  },
  {
      title: "Machine Learning",
      description: `I will Learn Machine Learning in next semester and I love to do model training`
  },
  {
      title: "Blockchain Expert",
      description: `I have a lot of knowlegde of Blockchain and I am very much interested in it and Current I am learning solidity language for smart contracts`
  }
],
projects: [
  {
      image: "Project (1).jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      buttonText: "About.."
  },
  {
      image: "Project (3).jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      buttonText: "About.."
  }
],
awards: [
  {
      image: "hacker_rank.png",
      title: "HackerRank"
  },
  {
      image: "code_rush.png",
      title: "CodeRush"
  }
],
contactInfo: {
  email: "bscs22060@itu.edu.pk",
  phone: "+92 3085829927",
  address: "Multan"
}
};
function populatePortfolio() {
  // Populate personal info
  document.querySelector('.home-content h1').textContent = portfolioData.personalInfo.name;
  document.querySelector('.home-content h2 span').textContent = portfolioData.personalInfo.role;
  document.querySelector('.home-content h3').textContent = portfolioData.personalInfo.passion;
  document.querySelector('.home-content p').textContent = portfolioData.personalInfo.description;
   // Social media links
   document.querySelector('.social-media li:nth-child(1) a').href = portfolioData.personalInfo.socialLinks.github;
   document.querySelector('.social-media li:nth-child(2) a').href = portfolioData.personalInfo.socialLinks.instagram;
   document.querySelector('.social-media li:nth-child(3) a').href = portfolioData.personalInfo.socialLinks.linkedin;
   document.querySelector('.social-media li:nth-child(4) a').href = portfolioData.personalInfo.socialLinks.twitter;
   // Populate services
   const serviceCards = document.querySelectorAll('.service .card');
   portfolioData.services.forEach((service, index) => {
       serviceCards[index].querySelector('h2').textContent = service.title;
       serviceCards[index].querySelector('p').textContent = service.description;
   });
   // Populate projects
   const projectCards = document.querySelectorAll('.main-project .project');
   portfolioData.projects.forEach((project, index) => {
       projectCards[index].querySelector('img').src = project.image;
       const techList = projectCards[index].querySelectorAll('.sanjay h2');
       project.technologies.forEach((tech, techIndex) => {
           techList[techIndex].textContent = tech;
       });
   });
    // Populate awards
    const awardCards = document.querySelectorAll('.main-project .project');
    portfolioData.awards.forEach((award, index) => {
        awardCards[index].querySelector('img').src = award.image;
        awardCards[index].querySelector('h2').textContent = award.title;
    });
 // Populate contact information
 document.querySelector('.main-footer h3:nth-child(2)').textContent = `Email: ${portfolioData.contactInfo.email}`;
 document.querySelector('.main-footer h3:nth-child(3)').textContent = `Phone: ${portfolioData.contactInfo.phone}`;
 document.querySelector('.main-footer h3:nth-child(4)').textContent = `Address: ${portfolioData.contactInfo.address}`;
}
// Call the function to populate the data
populatePortfolio();