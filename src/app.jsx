const links = ["Início", "Sobre", "Preço", "Contato"]

const App = () => {
  return (
    <>
      <main className="bg-[url(/public/home.jpg)] bg-cover h-dvh">
        <nav className="flex justify-center">
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
          <h1 className="text-5xl font-sans font-black tracking-tight text-balance text-white sm:text-7xl font-stretch-extra-condensed">
            Corpo em Transformação <br /> Vida mais Forte
          </h1>
          <p className="mt-10 text-gray-300 font-sans text-xl ">
            Resultados que você vê no espelho e sente no seu dia a dia na
            <strong className="text-[#a3ff00]"> Fit Genesis</strong>, você não
            apenas treina <br />
            Você se transforma. Descubra o poder do movimento e conquiste uma
            vida mais saudável e feliz.
          </p>
          <div className="mt-5 flex justify-center">
            <a
              href="#"
              className="rounded-md bg-[#a3ff00] px-3.5 py-2.5 text-black font-semibold m-3 mr-5"
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
      <div className="bg-black flex justify-center pt-5">
        <div>
          <h2 className="text-white text-[45px] font-semibold ml-10">
            Por que nos escolher
          </h2>
          <div className="flex flex-wrap">
            <span className="text-white text-[20px] mt-25 pr-5 ">&lt;</span>
            <div className="bg-[#a3ff00] w-70 m-3 rounded-xl">
              <h3 className="text-black py-5 pl-5 text-xl font-black">
                Equipamentos de Alta Qualidade
              </h3>
              <p className="text-black-400 px-5 pb-5">
                A academia conta com aparelhos modernos para musculação e
                cardio, garantindo treinos eficientes e seguros para todos os
                níveis.
              </p>
            </div>
            <div className="bg-gray-800 w-70 m-3 rounded-xl">
              <h3 className="text-white py-5 pl-5 text-xl font-black">
                Aulas Diversificadas
              </h3>
              <p className="text-gray-400 px-5 pb-5">
                Modalidades como dança, spinning e treinamento funcional para
                quem busca um treino dinâmico e motivador.
              </p>
            </div>
            <div className="bg-gray-800 w-70 m-3 rounded-xl">
              <h3 className="text-white py-5 pl-5 text-xl font-black">
                Defesa Pessoal
              </h3>
              <p className="text-gray-400 px-5 pb-5">
                Inclui aulas de Muay Thai, Jiu-Jitsu e Boxe, ideais para quem
                deseja melhorar a condição física e aprender técnicas de defesa
                pessoal.
              </p>
            </div>
            <span className="text-white text-[20px] pt-25 pl-5">&gt;</span>
          </div>
        </div>
      </div>
      <div className="bg-black flex justify-center pt-15">
        <div>
          <h2 className="text-white text-[45px] font-semibold ">Sobre Nós</h2>
          <img src="about.jpg" className="w-220 h-100 bg-cover rounded-xl" />
          <div className="flex">
            <p className="text-gray-400 w-150 mt-7">
              Com anos de experiência, a{" "}
              <strong className="text-[#a3ff00]">Fit Genesis</strong> oferece um
              ambiente motivador, equipamentos modernos e profissionais
              qualificados para ajudar você a alcançar seus objetivos. Venha
              treinar com a gente e evoluir sempre!
            </p>
            <span className="rounded-md bg-[#a3ff00]  text-black font-semibold m-3 ml-25 mt-9 pt-3 h-[50px] w-[180px] text-center text-[18px]">
              5 Anos no Mercado
            </span>
          </div>
          <div className="flex justify-center">
            <img
              src="about2.jpg"
              className="m-7 w-32 h-32 rounded-full object-cover border-4 border-[#a3ff00]"
            />
            <img
              src="about3.jpg"
              className="m-7 w-32 h-32 rounded-full object-cover border-4 border-[#a3ff00]"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export { App }
