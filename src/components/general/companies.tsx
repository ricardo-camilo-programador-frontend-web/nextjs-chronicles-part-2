import Typography from "@/components/general/typography";
import Link from "@/components/general/link";

const Companies = () => {
  return (
    <div
      className="bg-zinc-950 w-full flex flex-col justify-center"
      id="contact"
    >
      <div className="py-24 flex flex-col items-center gap-24 max-md:py-16">
        <div className="flex flex-col gap-8 justify-center items-center">
          <Typography variant="h2" className="text-white text-center">
            Vamos criar algo <br />
            extraordinário juntos!
          </Typography>

          <div className="flex flex-col gap-4 items-center">
            <Typography
              variant="body1"
              className="text-white text-center max-w-prose"
            >
              &quot;Como desenvolvedor metódico e dedicado, transformo ideias em
              experiências digitais memoráveis. Cada projeto é uma oportunidade
              de criar algo verdadeiramente significativo.&quot;
            </Typography>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <Link
              href="mailto:ricardo.camilo.dev@gmail.com
"
              className="text-white uppercase text-center hover:no-underline transition-all duration-300"
              variant="dark"
            >
              ricardo.camilo.dev@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Companies;
