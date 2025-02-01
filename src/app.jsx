const links = ["Início", "Sobre", "Preço", "Contato"]

//className="bg-[url(/public/3.jpg)] "

const App = () => {
  return (
    <>
      <main className="bg-[url(/public/home.jpg)] bg-cover h-dvh">
        <nav>
          <ul className="flex justify-center">
            {links.map((link) => (
              <li className="p-5 " key={link}>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2  font-semibold text-gray-300 hover:bg-[#d0fd3b] hover:text-black"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-center mt-30">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl  font-stretch-extra-condensed">
            Corpo em Transformação <br /> Vida mais Forte
          </h1>
          <p className="mt-10 text-gray-300 font-stretch-extra-condensed text-xl ">
            Treinos personalizados para resultados extraordinários, nossos
            profissionais altamente qualificados vão te ajudar <br /> A definir
            seus objetivos e criar um plano de treino exclusivo para você
          </p>
          <div className="mt-5 flex justify-center">
            <a
              href="#"
              className="rounded-md bg-[#d0fd3b] px-3.5 py-2.5 text-black font-semibold m-3 mr-5"
            >
              Começar
            </a>
            <a
              href="#"
              className="text-sm/6 font-semibold text-white m-3 pt-2 ml-5"
            >
              Sobre Nós <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export { App }
