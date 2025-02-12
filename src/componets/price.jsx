import { motion } from "motion/react"

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

const Price = () => {
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

export { Price }
