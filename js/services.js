const services = [{"title": "Web Application Development", "tag": "WEB DEVELOPMENT", "description": "Build responsive websites, portals and web applications designed around real business needs.", "features": ["Responsive websites", "Business portals", "User-friendly interfaces"], "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85"}, {"title": "Database Design & Engineering", "tag": "DATABASES", "description": "Organize information with reliable database structures, queries, backups and secure data handling.", "features": ["Database design", "SQL development", "Data management"], "image": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1000&q=85"}, {"title": "Cybersecurity & Ethical Hacking", "tag": "CYBERSECURITY", "description": "Improve digital safety through authorized security reviews, vulnerability awareness and practical protection guidance.", "features": ["Security assessments", "Risk awareness", "Defensive security"], "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=85"}, {"title": "Network Engineering", "tag": "NETWORKING", "description": "Plan, configure and troubleshoot wired and wireless networks for dependable connectivity.", "features": ["Network setup", "Router and switch configuration", "Troubleshooting"], "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"}, {"title": "Hospital Management Systems", "tag": "HEALTHCARE SYSTEMS", "description": "Support healthcare workflows with organized patient, appointment and records-management software.", "features": ["Patient records", "Appointments", "Workflow management"], "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85"}, {"title": "Hotel & Business Systems", "tag": "BUSINESS SYSTEMS", "description": "Create practical digital tools for bookings, operations, customer records and everyday business processes.", "features": ["Booking workflows", "Business records", "Operations tools"], "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=85"}, {"title": "IT Support & System Maintenance", "tag": "IT SUPPORT", "description": "Diagnose computer issues, maintain systems and help keep devices performing reliably.", "features": ["Computer troubleshooting", "System maintenance", "Software installation"], "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85"}, {"title": "Programming & Software Development", "tag": "SOFTWARE", "description": "Develop useful software solutions, automate tasks and turn ideas into working applications.", "features": ["Custom software", "Python programming", "Automation"], "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85"}, {"title": "System Security Testing", "tag": "SECURITY TESTING", "description": "Test systems with permission, document weaknesses and recommend steps to strengthen defenses.", "features": ["Authorized testing", "Findings and reports", "Security improvements"], "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"}];

function serviceCard(service) {
  const features = service.features.map(item => `<li>${item}</li>`).join("");
  return `<article class="service-card">
    <div class="service-media">
      <img class="service-image" src="${service.image}" alt="${service.title} in action" loading="lazy">
    </div>
    <div class="service-copy">
      <span class="service-icon">${service.tag}</span><h3>${service.title}</h3>
      <p>${service.description}</p><ul class="service-features">${features}</ul>
      <a class="service-link" href="contact.html">Enquire about this service →</a>
    </div></article>`;
}
const serviceContainer = document.getElementById("services-container");
if (serviceContainer) {
  serviceContainer.addEventListener("error", event => {
    if (event.target instanceof HTMLImageElement && event.target.matches(".service-image")) {
      event.target.classList.add("image-unavailable");
    }
  }, true);
  const fullPage = document.body.classList.contains("all-services");
  serviceContainer.innerHTML = (fullPage ? services : services.slice(0,3)).map(serviceCard).join("");
}
