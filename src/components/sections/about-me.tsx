import Typography from "@/components/general/typography";
import { BIT_OF_ME } from "@/lib/data";

const AboutMe = () => {
  return (
    <section className="w-full pb-24 pt-16 border-b border-zinc-200 flex justify-center px-4 max-md:py-10">
      <div className="flex flex-col gap-8 max-w-[928px]">
        <Typography variant="h1">Olá! 👋</Typography>
        <div className="flex flex-col gap-6">
          <Typography variant="body1">
            Sou Ricardo Camilo, desenvolvedor frontend apaixonado por criar experiências digitais memoráveis. 🚀
            <br />
            <br />
            Como um desenvolvedor com perfil investigador (93%), minha abordagem combina precisão técnica com
            criatividade. Acredito que cada linha de código é uma oportunidade de criar algo extraordinário,
            transformando ideias em interfaces que encantam e facilitam a vida das pessoas. ✨
            <br />
            <br />
            Formado em Gestão da Tecnologia da Informação pela FATEC, encontrei na programação frontend
            minha verdadeira vocação. Com 4 anos de experiência, especializo-me em React.js e Vue.js,
            sempre buscando as melhores práticas e soluções inovadoras. 💻
            <br />
            <br />
            Quando não estou codificando, você me encontra mergulhado em novels chinesas, mangás ou
            acompanhado de meus cinco gatos, buscando inspiração para trazer ainda mais criatividade
            aos meus projetos. 📚🐱
          </Typography>

          <div className="flex flex-col gap-3">
            <Typography variant="body1" className="font-semibold">
              Um pouco sobre mim
            </Typography>
            <ul className="flex flex-col gap-2">
              {BIT_OF_ME.map((point) => (
                <li className="flex gap-2" key={point.emoji}>
                  <span>{point.emoji}</span>
                  <Typography variant="body1">{point.text}</Typography>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <Typography variant="body1" className="font-semibold">
              🧠 Crença de Vida
            </Typography>
            <Typography variant="body1">
              &quot;Seja água, meu amigo. Esvazie sua mente. Seja informe, sem
              forma, sem contorno, como a água. Quando você coloca água em um
              copo, ela se torna o copo. Quando você coloca água em uma garrafa,
              ela se torna a garrafa. Quando você a coloca em um bule, ela se
              torna o bule. A água pode fluir ou pode se chocar. Seja água, meu
              amigo.&quot; - Bruce Lee 🌊
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
