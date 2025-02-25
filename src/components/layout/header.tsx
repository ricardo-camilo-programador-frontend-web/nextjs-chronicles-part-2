import HeaderElements from '@/blocks/HeaderElements';
import Link from "@/components/general/link";

const Header = () => {
  const navLinks = [
    { label: 'journey', href: '#journey', animate: false },
    { label: 'work', href: '#work', animate: false },
    { label: 'testimonials', href: '#testimonials', animate: false },
    { label: 'contact', href: '#contact', animate: false },
  ];

  return (
    <header className="flex p-8 justify-center max-lg:px-4 sticky top-0 backdrop-blur-md bg-white/70 supports-[backdrop-filter]:bg-white/40 z-50">
      <div className="flex max-w-7xl w-full justify-between">
        <Link
          href="/"
          className="text-xl font-medium uppercase text-zinc-900 tracking-[1px] min-w-[17rem] cursor-pointer"
          rel="home"
          aria-label="Ricardo Camilo"
        >
          RICARDO CAMILO
        </Link>

        <HeaderElements navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Header;
