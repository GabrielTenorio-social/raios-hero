function Header() {
  return (
    <header className="fixed top-0 left-0 w-full pt-4 flex justify-between items-center z-30">
      <nav className="flex justify-center items-center border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-xs mx-auto bg-white/5">
        <ul className="flex justify-center items-center gap-8 text-white/80">
          <li className="hover:text-white transition">
            <a href="#">About us</a>
          </li>
          <li className="hover:text-white transition">
            <a href="#">Services</a>
          </li>
          <li className="hover:text-white transition">
            <a href="#">Customers</a>
          </li>
          <li className="hover:text-white transition">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
