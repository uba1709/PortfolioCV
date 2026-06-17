export default function LeftSection() {
  return (
    <div className="left-section">
        <section className="nameHero">
            <h1>Jakub Piwoński</h1>
            <h3>Junior Full-Stack Developer (coming soon)</h3>
            <p>I build accessible, pixel-perfect <br /> experiences for the web.</p>
        </section>
        <section className="navigation">
            <ul>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#experience">EXPERIENCE</a></li>
                <li><a href="#projects">PROJECTS</a></li>
            </ul>
        </section>
        <hr></hr>
        <section className="contactSection">
           <a href="https://www.instagram.com/jakub.piwonski/" target="_blank" rel="noopener noreferrer"><p>Instagram</p></a>
           <a href="https://github.com/uba1709" target="_blank" rel="noopener noreferrer"><p>GitHub</p></a>
        </section>
    </div>
  );
}