import { motion } from "motion/react"

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

export { About }
