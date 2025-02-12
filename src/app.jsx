import { motion } from "motion/react"
import { Home } from "./componets/home"
import { WhyChooseUs } from "./componets/why-choose-us"
import { About } from "./componets/about"
import { Price } from "./componets/price"

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
