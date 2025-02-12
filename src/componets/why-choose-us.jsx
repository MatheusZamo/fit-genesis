import { useState } from "react"
import { motion } from "motion/react"

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

const WhyChooseUs = () => {
  const [benefit, setBenefit] = useState(1)
  return (
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
            const titleColorDynamic = itemClicked ? "text-black" : "text-white"
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
  )
}

export { WhyChooseUs }
