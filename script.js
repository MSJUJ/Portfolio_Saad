

  
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  
  hamburger.addEventListener('click', () => {
      navbar.classList.toggle('active');
  });
  
// Populating the portfolio with JavaScript

const userInfo = {
    name: "Muhammad Saad",
    role: ["Web Developer", "Machine Learning Engineer", "Blockchain Expert"],
    passion: "Building cutting-edge digital solutions.",
    aboutMe: "I am passionate about creating responsive websites, applying machine learning for data-driven insights, and developing blockchain solutions for enhanced security.",
    email: "bscs22060@itu.edu.pk",
    phone: "+92 3085829927",
    address: "Multan, Pakistan",
    socialMedia: {
        github: "https://github.com/MSJUJ",
        instagram: "https://instagram.com/your_instagram",
        linkedin: "https://linkedin.com/in/muhammad-saad-5315a6266",
        twitter: "https://twitter.com/your_twitter"
    }
};

document.getElementById('name').textContent = userInfo.name;
document.getElementById('aboutName').textContent = userInfo.name;
document.getElementById('aboutRole').textContent = userInfo.role[0];
document.getElementById('passion').textContent = userInfo.passion;
document.getElementById('aboutPassion').textContent = userInfo.passion;
document.getElementById('aboutMeText').textContent = userInfo.aboutMe;
document.getElementById('aboutMeContent').textContent = userInfo.aboutMe;
document.getElementById('email').textContent = `Email: ${userInfo.email}`;
document.getElementById('phone').textContent = `Phone: ${userInfo.phone}`;
document.getElementById('address').textContent = `Address: ${userInfo.address}`;

const roleTyped = new Typed('.loop', {
    strings: userInfo.role,
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});

function populateSocialMediaLinks(containerId) {
    const container = document.getElementById(containerId);
    for (let platform in userInfo.socialMedia) {
        const iconClass = platform === 'github' ? 'fa-github' : platform === 'instagram' ? 'fa-instagram' : platform === 'linkedin' ? 'fa-linkedin-in' : 'fa-twitter';
        const link = document.createElement('a');
        link.href = userInfo.socialMedia[platform];
        link.target = "_blank";
        link.innerHTML = `<i class="fa-brands ${iconClass}"></i>`;
        container.appendChild(link);
    }
}

// Populate social media links in multiple sections
populateSocialMediaLinks('socialMediaLinks');
populateSocialMediaLinks('aboutSocialMediaLinks');
populateSocialMediaLinks('footerSocialMediaLinks');
