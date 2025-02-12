import { useState } from "react"
import { motion } from "motion/react"

const textGoingDown = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}

const App = () => {
  const [benefit, setBenefit] = useState(1)

  const links = [
    { name: "Início", for: "home" },
    { name: "Sobre", for: "about" },
    { name: "Preço", for: "price" },
    { name: "Contato", for: "visit" },
  ]
  const benefits = [
    {
      title: "Equipamentos de Alta Qualidade",
      text: "A academia conta com aparelhos modernos para musculação e cardio, garantindo treinos eficientes e seguros para todos os níveis",
      id: 1,
    },
    {
      title: "Aulas Diversificadas",
      text: "Modalidades como dança, spinning e treinamento funcional para quem busca um treino dinâmico e motivador.",
      id: 2,
    },
    {
      title: "Defesa Pessoal",
      text: "Inclui aulas de Muay Thai, Jiu-Jitsu e Boxe, ideais para quem deseja melhorar a condição física e aprender técnicas de defesa pessoal.",
      id: 3,
    },
  ]
  const plans = [
    {
      name: "Plano Fit",
      price: "R$99,90",
      benefits: [
        "Acesso ilimitado à musculação e cardio",
        "Horários flexíveis para treinar quando quiser",
        "Suporte de profissionais para orientação",
        "Vestiários equipados e ambiente climatizado",
      ],
      id: 1,
    },
    {
      name: "Plano Premium",
      price: "R$149,90",
      benefits: [
        "Todos os benefícios do Plano Fit",
        "Aulas coletivas (dança, spinning, funcional)",
        "Artes marciais (Muay Thai, Jiu-Jitsu, Boxe)",
        "Avaliação física e acompanhamento personalizado",
      ],
      id: 2,
    },
  ]

  return (
    <>
      <main
        id="home"
        className="bg-[url(/public/home.jpg)] bg-cover h-dvh bg-center"
      >
        <nav className="flex justify-center @container">
          <ul className="justify-center @sm:hidden @md:flex @lg:flex">
            {links.map((link) => (
              <motion.li
                initial="initial"
                animate="animate"
                variants={textGoingDown}
                className="p-5 "
                key={link}
              >
                <motion.a
                  whileTap={{ scale: 0.65 }}
                  href={`#${link.for}`}
                  className="-mx-3 block rounded-lg px-3 py-2  font-semibold text-gray-300 hover:bg-[#a3ff00] hover:text-black"
                >
                  {link.name}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.div
          initial="initial"
          animate="animate"
          variants={textGoingDown}
          className="text-center mt-30"
        >
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
            <motion.a
              whileTap={{ scale: 0.65, background: "#578508" }}
              href="#visit"
              className="rounded-md bg-[#a3ff00] px-3.5 py-2.5 text-black font-semibold m-3 mr-5"
            >
              Começar
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.65 }}
              href="#about"
              className="text-sm/6 font-semibold text-white m-3 pt-2 ml-5"
            >
              Sobre Nós <span aria-hidden="true">→</span>
            </motion.a>
          </div>
        </motion.div>
      </main>
      <div
        id="about"
        className="bg-black flex justify-center  md:pt-15 lg:pt-5 sm:pt-10 @container"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 0.5,
            },
          }}
        >
          <h2 className="text-white text-[45px] font-semibold  @sm:text-center">
            Por que nos escolher
          </h2>
          <ul className="flex flex-wrap justify-center">
            {benefits.map((item) => {
              const itemClicked = benefit === item.id
              const backgroundDynamic = itemClicked
                ? "bg-[#a3ff00]"
                : "bg-gray-800"
              const titleColorDynamic = itemClicked
                ? "text-black"
                : "text-white"
              const textColorDynamic = itemClicked
                ? "text-black-400"
                : "text-gray-400"
              return (
                <motion.li
                  whileTap={{ scale: 0.95 }}
                  key={item.id}
                  className={`${backgroundDynamic} w-70 m-3 rounded-xl cursor-pointer`}
                  onClick={() => setBenefit(item.id)}
                >
                  <h3
                    className={`${titleColorDynamic} py-5 pl-5 text-xl font-black`}
                  >
                    {item.title}
                  </h3>
                  <p className={`${textColorDynamic} px-5 pb-5`}>{item.text}</p>
                </motion.li>
              )
            })}
          </ul>
        </motion.div>
      </div>
      <div className="bg-black flex justify-center pt-15 @container">
        <div className="lg:w-[900px] lg:h-[800px] @3xl:w-[700px] @3xl:h-[700px] @sm:w-[350px] @sm:h-[600px] ">
          <h2 className="text-white text-[45px] font-semibold">Sobre Nós</h2>
          <img
            src="about.jpg"
            className=" @3xl:w-[100%] @3xl:h-[350px] @sm:h-[250px] object-cover rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="flex"
          >
            <p className="text-gray-400 w-150 mt-7">
              Com anos de experiência, a{" "}
              <strong className="text-[#a3ff00]">Fit Genesis</strong> oferece um
              ambiente motivador, equipamentos modernos e profissionais
              qualificados para ajudar você a alcançar seus objetivos. Venha
              treinar com a gente e evoluir sempre!
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="flex justify-center"
          >
            <img
              src="about2.jpg"
              className="m-7 w-30 h-30 rounded-full object-cover border-4 border-[#a3ff00]"
            />
            <img
              src="about3.jpg"
              className="m-7 w-30 h-30 rounded-full object-cover border-4 border-[#a3ff00]"
            />
          </motion.div>
        </div>
      </div>
      <div
        id="price"
        className="bg-black flex flex-col justify-center pt-15 @container"
      >
        <h2 className="text-white text-[45px] font-semibold text-center">
          Escolha o plano certo para você
        </h2>
        <ul className="flex justify-center m-5 flex-wrap">
          {plans.map((plan) => {
            return (
              <motion.li
                initial={{ scale: 0 }}
                whileInView={{
                  scale: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className=" @sm:w-100 @sm:h-115 @3xl:h-100  m-5 rounded-xl text-center p-5 border border-white "
                key={plan.id}
              >
                <p className="text-white text-[25px] font-bold">{plan.name}</p>
                <p className="text-white text-[40px] font-bold">
                  {plan.price}
                  <span className="text-[15px] font-normal text-gray-300">
                    / Mês
                  </span>
                </p>
                <ul className="text-white p-3">
                  {plan.benefits.map((benefit) => (
                    <li className="p-2 text-gray-400" key={benefit}>
                      {" "}
                      {benefit}
                    </li>
                  ))}
                  <motion.button
                    whileTap={{ scale: 0.65, background: "#578508" }}
                    href="#visit"
                    className="rounded-md bg-[#a3ff00] text-black font-semibold w-60 h-10 cursor-pointer "
                  >
                    Começar
                  </motion.button>
                </ul>
              </motion.li>
            )
          })}
        </ul>
      </div>
      <footer
        id="visit"
        className="bg-[url(/public/visit.png)] h-180 bg-cover bg-right @container"
      >
        <h2 className="text-white text-[45px] font-semibold text-center @sm:pt-10 @md:pt-40 @lg:pt-50">
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
            className="w-70 min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#a3ff00] sm:text-sm/6"
          />
          <motion.button
            whileTap={{ scale: 0.65, background: "#578508" }}
            className="w-20 flex-none rounded-md bg-[#a3ff00] px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
          >
            Enviar
          </motion.button>
        </div>
      </footer>
    </>
  )
}

export { App }
