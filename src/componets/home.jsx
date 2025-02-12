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

const links = [
  { name: "Início", for: "home" },
  { name: "Sobre", for: "about" },
  { name: "Preço", for: "price" },
  { name: "Contato", for: "visit" },
]

const Home = () => {
  return (
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
          Você se transforma. Descubra o poder do movimento e conquiste uma vida
          mais saudável e feliz.
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
  )
}

export { Home }
