const header = document.getElementById("site-header");
if (header) {
  header.innerHTML = `<nav class="navbar" aria-label="Main navigation">
    <a class="logo" href="index.html"><span class="brand-mark">EPT</span><span class="brand-name"><strong>EMSWORTH PRO TECH</strong><small>Pro Nanotechnology</small></span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Toggle navigation">Menu</button>
    <ul class="nav-links"><li><a href="index.html">Home</a></li><li><a href="services.html">Services</a></li><li><a href="about.html">About</a></li><li><a href="team.html">Team</a></li><li><a href="contact.html">Contact</a></li></ul>
    <a class="quote-btn" href="contact.html">Get a quote</a></nav>`;
  const toggle = header.querySelector(".menu-toggle"), links = header.querySelector(".nav-links");
  toggle.addEventListener("click", () => { const open = links.classList.toggle("is-open"); toggle.setAttribute("aria-expanded", String(open)); });
}
const footer = document.getElementById("site-footer");
if (footer) footer.innerHTML = `<div class="footer-inner"><div class="footer-brand"><a class="logo" href="index.html"><span class="brand-mark">EPT</span><span class="brand-name"><strong>EMSWORTH PRO TECH</strong><small>Pro Nanotechnology</small></span></a><p>Practical technology. Thoughtful solutions. Safer systems.</p></div><div class="footer-contact"><a href="mailto:emsworthpro@gmail.com">emsworthpro@gmail.com</a><a href="https://wa.me/254718924252">WhatsApp: 0718924252</a></div><small>© ${new Date().getFullYear()} Emsworth Pro Tech. All rights reserved.</small></div>`;
const enquiryForm = document.getElementById("enquiry-form");
if (enquiryForm) enquiryForm.addEventListener("submit", event => {
  event.preventDefault(); const data = new FormData(enquiryForm);
  const fields = ["name","email","service","message"].map(key => `${key}: ${data.get(key) || "Not specified"}`).join("\n");
  window.open(`https://wa.me/254718924252?text=${encodeURIComponent("Hello Emsworth Pro Tech,\n"+fields)}`, "_blank", "noopener");
});
