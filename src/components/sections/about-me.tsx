import Typography from "@/components/general/typography";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("about");

  const bitOfMe = [
    { emoji: "📚", text: t("bitOfMe.reading") },
    { emoji: "🎬", text: t("bitOfMe.movies") },
    { emoji: "🐱", text: t("bitOfMe.cats") },
    { emoji: "💻", text: t("bitOfMe.programming") },
    { emoji: "🌙", text: t("bitOfMe.relaxing") },
    { emoji: "🎮", text: t("bitOfMe.gaming") },
  ];

  return (
    <section className="w-full pb-24 pt-16 border-b border-zinc-200 dark:border-zinc-800 flex justify-center px-4 max-md:py-10">
      <div className="flex flex-col gap-8 max-w-[928px]">
        <Typography variant="h1">{t("greeting")}</Typography>
        <div className="flex flex-col gap-6">
          <Typography variant="body1">
            {t("intro")}
            <br />
            <br />
            {t("description")}
            <br />
            <br />
            {t("education")}
            <br />
            <br />
            {t("hobbies")}
          </Typography>

          <div className="flex flex-col gap-3">
            <Typography variant="body1" className="font-semibold">
              {t("aboutMeTitle")}
            </Typography>
            <ul className="flex flex-col gap-2">
              {bitOfMe.map((point) => (
                <li className="flex gap-2" key={point.emoji}>
                  <span>{point.emoji}</span>
                  <Typography variant="body1">{point.text}</Typography>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <Typography variant="body1" className="font-semibold">
              {t("lifeBeliefTitle")}
            </Typography>
            <Typography variant="body1">{t("bruceQuote")}</Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
