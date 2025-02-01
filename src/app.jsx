const links = ["Início", "Sobre", "Preço", "Contato"]

const App = () => {
  return (
    <>
      <nav className="bg-dark">
        <ul className="flex justify-center ">
          {links.map((link) => (
            <li className="p-5" key={link}>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-100"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export { App }
