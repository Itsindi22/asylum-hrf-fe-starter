import Logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="w-full primary-c text-amber-50 py-8 px-14">
      {/* TOP ROW: logo + address */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Logo */}
        <div>
          <a href="https://www.humanrightsfirst.org/">
            <img className="w-[100px]" src={Logo} alt="HRF logo white" />
          </a>
        </div>

        {/* Address block */}
        <div className="text-sm leading-relaxed text-left">
          <p>Human Rights First</p>
          <p>75 Broad St, 31st Floor</p>
          <p>New York, New York 10004 US</p>
          <p className="pt-4">For Media Inquiries call 202-370-333</p>
        </div>
      </section>

      {/* BOTTOM LINKS ROW */}
      <nav className="max-w-4xl mx-auto mt-8 flex flex-wrap justify-center gap-8 text-sm">
        <button className="nav-btn">About Us</button>
        <button className="nav-btn">Contact Us</button>
        <button className="nav-btn">Press</button>
        <button className="nav-btn">Terms & Privacy</button>
        <button className="nav-btn">Sign Up</button>
        <button className="nav-btn">Careers</button>
      </nav>
    </footer>
  );
}
