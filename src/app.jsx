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
                  className="-mx-3 block rounded-lg px-3 py-2  font-semibold text-gray-300 hover:bg-[#a3ff00] hover:text-black"
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
          <img
            src="about.jpg"
            className="w-[900px] h-[500px] object-cover rounded-xl"
          />
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
      <div className="bg-black flex flex-col justify-center pt-15">
        <h2 className="text-white text-[45px] font-semibold text-center">
          Escolha o plano certo para você
        </h2>
        <div className="flex justify-center m-5 flex-wrap">
          <div className="w-100 h-100  m-5 rounded-xl text-center p-5 border border-white">
            <p className="text-white text-[25px] font-bold">Plano Fit</p>
            <p className="text-white text-[40px] font-bold">
              R$99,90
              <span className="text-[15px] font-normal text-gray-300">
                / Mês
              </span>
            </p>
            <ul className="text-white p-3">
              <li className="p-2 text-gray-400">
                Acesso ilimitado à musculação e cardio
              </li>
              <li className="p-2 text-gray-400">
                Horários flexíveis para treinar quando quiser
              </li>
              <li className="p-2 text-gray-400">
                Suporte de profissionais para orientação
              </li>
              <li className="p-2 text-gray-400">
                Vestiários equipados e ambiente climatizado
              </li>
            </ul>
            <button
              href="#"
              className="rounded-md bg-[#a3ff00] text-black font-semibold mr-5 w-60 h-10 cursor-pointer"
            >
              Começar
            </button>
          </div>
          <div className="w-100 h-100 m-5 rounded-xl text-center p-5 border border-white">
            <p className="text-white text-[25px] font-bold">Plano Premium</p>
            <p className="text-white text-[40px] font-bold">
              R$149,90
              <span className="text-[15px] font-normal text-gray-300">
                / Mês
              </span>
            </p>
            <ul className="text-white p-3">
              <li className="p-2 text-gray-400">
                Todos os benefícios do Plano Fit
              </li>
              <li className="p-2 text-gray-400">
                Aulas coletivas (dança, spinning, funcional)
              </li>
              <li className="p-2 text-gray-400">
                Artes marciais (Muay Thai, Jiu-Jitsu, Boxe)
              </li>
              <li className="p-2 text-gray-400">
                Avaliação física e acompanhamento personalizado
              </li>
            </ul>
            <button
              href="#"
              className="rounded-md bg-[#a3ff00] text-black font-semibold  mr-5 w-60 h-10 cursor-pointer"
            >
              Começar
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-[url(/public/visit.png)] h-180 bg-cover">
        <h2 className="text-white text-[45px] font-semibold text-center pt-50">
          Faça sua primeira visita
        </h2>
        <p className="mt-10 text-gray-300 font-sans text-xl text-center p-10 ">
          Venha conhecer nossa academia e aproveite um dia de treino gratuito
          para testar nossos equipamentos, participar das aulas e sentir a
          energia do nosso espaço. Sem compromisso, apenas você e o seu melhor
          treino!
        </p>
        <div className="text-center">
          <label className="sr-only">Email address</label>
          <input
            type="email"
            required
            placeholder="Seu Email"
            autoComplete="email"
            className="w-100 min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#a3ff00] sm:text-sm/6"
          />
          <button
            type="submit"
            className="w-20 flex-none rounded-md bg-[#a3ff00] px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Enviar
          </button>
        </div>
      </footer>
    </>
  )
}

export { App }
