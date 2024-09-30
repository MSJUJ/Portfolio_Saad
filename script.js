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
   
}