import HeaderElements from '@/blocks/HeaderElements';
import Link from "@/components/general/link";

const Header = () => {
  const navLinks = [
    { label: 'journey', href: '#journey' },
    { label: 'work', href: '#work' },
    { label: 'testimonials', href: '#testimonials' },
    { label: 'contact', href: '#contact' },
  ];

  return (
    <header className="flex p-8 justify-center max-lg:px-4 sticky top-0 bg-white z-50">
      <div className="flex max-w-7xl w-full justify-between">
        <Link
          href="/"
          className="text-xl font-medium uppercase text-zinc-900 tracking-[1px] cursor-pointer"
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
