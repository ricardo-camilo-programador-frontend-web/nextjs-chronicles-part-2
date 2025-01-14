import Typography from "@/components/general/typography";
import Link from "@/components/general/link";
import { useTranslations } from 'next-intl';

const Companies = () => {
  const t = useTranslations('contact');

  return (
    <div
      className="bg-zinc-950 w-full flex flex-col justify-center"
      id="contact"
    >
      <div className="py-24 flex flex-col items-center gap-24 max-md:py-16">
        <div className="flex flex-col gap-8 justify-center items-center">
          <Typography variant="h2" className="text-white text-center">
            {t('title.line1')} <br />
            {t('title.line2')}
          </Typography>

          <div className="flex flex-col gap-4 items-center">
            <Typography
              variant="body1"
              className="text-white text-center max-w-prose"
            >
              {t('description')}
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
