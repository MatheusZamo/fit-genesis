import { motion } from "motion/react"
import { Home } from "./componets/home"
import { WhyChooseUs } from "./componets/why-choose-us"

const About = () => {
  return (
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
  )
}

const Price = () => {
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
  )
}

const Visit = () => {
  return (
    <footer
      id="visit"
      className="bg-[url(/public/visit.png)] h-180 bg-cover bg-right @container"
    >
      <h2 className="text-white text-[45px] font-semibold text-center @sm:pt-10 @md:pt-40 @lg:pt-50">
        Faça sua primeira visita
      </h2>
      <p className="mt-10 text-gray-300 font-sans text-xl text-center p-10 ">
        Venha conhecer nossa academia e aproveite um dia de treino gratuito para
        testar nossos equipamentos, participar das aulas e sentir a energia do
        nosso espaço. Sem compromisso, apenas você e o seu melhor treino!
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
  )
}

const App = () => {
  return (
    <>
      <Home />
      <WhyChooseUs />
      <About />
      <Price />
      <Visit />
    </>
  )
}

export { App }
