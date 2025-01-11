import React from "react";

import Typography from "@/components/general/typography";
import Skill from "@/components/general/skill";
import { SKILLS } from "@/lib/data";

const Journey = () => {
  const skills = SKILLS.filter((skill) => skill.label !== "Redux");

  return (
    <section className="bg-zinc-50 w-full flex justify-center" id="journey">
      <div className="flex max-w-3xl py-24 px-4 flex-col gap-12 justify-center items-center max-md:py-16">
        <Typography
          variant="h2"
          className="uppercase w-full flex justify-center"
        >
          Sobre minhas Crônicas
        </Typography>
        <div className="flex flex-col gap-8">
          <Typography variant="body1">
            Sou um desenvolvedor Frontend com 4 anos de experiência, atualmente
            em São Paulo, Brasil. Minha trajetória começou após me formar em
            Gestão da Tecnologia da Informação pela FATEC, onde descobri minha
            paixão por criar interfaces que impactam a vida das pessoas. Comecei
            desenvolvendo com Vue.js, passei por React, e varios outros
            frameworks javascript e hoje tenho orgulho de dominar múltiplos
            frameworks modernos que me permitem criar soluções robustas e
            escaláveis.
            <br />
            <br /> Abordo cada projeto com um olhar meticuloso e estratégico.
            Sou especialmente dedicado à criação de código limpo e otimizado,
            sempre buscando as melhores práticas de desenvolvimento.
          </Typography>
          <div className="flex flex-col gap-4">
            Tecnologias e frameworks que utilizo:
            <div className="flex gap-3 flex-wrap">
              {skills.map((skill) => (
                <React.Fragment key={skill.label}>
                  <Skill icon={skill.icon} label={skill.label} variant="md" />
                </React.Fragment>
              ))}
            </div>
          </div>
          <Typography variant="body1">
            <span className="font-semibold text-zinc-900">
              Fato interessante:&nbsp;
            </span>
            Como um desenvolvedor orientado a resultados (segundo perfil
            comportamental), estou sempre estudando novas tecnologias.
            Atualmente, estou aprofundando meus conhecimentos em Node.js, buscando expandir ainda mais minhas capacidades técnicas.
            <br />
            <br />
            Acredito que o verdadeiro valor de um desenvolvedor está
            não apenas no código que escrevo, mas na capacidade de se tornar elegante e facil de dar manutenção.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Journey;
