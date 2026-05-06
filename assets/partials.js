// Injects shared nav + footer. Call injectChrome('home' | 'services' | 'projects' | 'team' | 'contact').
function injectChrome(active) {
  const nav = `
  <header class="nav" role="banner">
    <div class="nav-inner">
      <a class="nav-brand" href="index.html" aria-label="Wayfinder home">
        <img src="assets/logos/corner-logo.png" alt="Wayfinder Real Estate" />
      </a>
      <button class="nav-burger" aria-label="Toggle menu">
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none"><path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" stroke-width="1.5"/></svg>
      </button>
      <nav aria-label="Primary">
        <ul class="nav-links">
          <li><a href="index.html" ${active==='home'?'class="active"':''}>Home</a></li>
          <li><a href="services.html" ${active==='services'?'class="active"':''}>Services</a></li>
          <li><a href="projects.html" ${active==='projects'?'class="active"':''}>Projects</a></li>
          <li><a href="team.html" ${active==='team'?'class="active"':''}>Team</a></li>
          <li><a href="contact.html" ${active==='contact'?'class="active"':''}>Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  `;

  const footer = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-logo">
          <img src="assets/logos/ivory-logo.png" alt="Wayfinder Real Estate" />
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Office</h4>
          <ul>
            <li>5608 Parkcrest Drive</li>
            <li>Suite 350</li>
            <li>Austin, TX 78731</li>
            <li style="margin-top:6px;"><a href="tel:5127462720">(512) 746-2720</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@wayfinder-re.com">info@wayfinder-re.com</a></li>
          </ul>
        </div>
      </div>
      <div class="copy">
        <span>© 2026 Wayfinder Real Estate. All rights reserved.</span>
      </div>
    </div>
  </footer>
  `;

  document.getElementById('site-nav').innerHTML = nav;
  document.getElementById('site-footer').innerHTML = footer;

  // Re-bind nav burger
  const navEl = document.querySelector('.nav');
  const burger = document.querySelector('.nav-burger');
  if (burger && navEl) burger.addEventListener('click', () => navEl.classList.toggle('open'));
}
