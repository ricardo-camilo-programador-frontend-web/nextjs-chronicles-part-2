import HeaderElements from '@/blocks/HeaderElements';

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
        <a
          href="/"
          className="text-xl font-medium uppercase text-zinc-900 tracking-[1px] cursor-pointer"
          rel="home"
          aria-label="Ricardo Camilo"
        >
          RICARDO CAMILO
        </a>

        <HeaderElements navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Header;
