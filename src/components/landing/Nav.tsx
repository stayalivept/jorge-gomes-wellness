export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
          Jorge<span className="text-secondary-foreground">Gomes</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#abordagem" className="hover:text-foreground">Abordagem</a>
          <a href="#contacto" className="hover:text-foreground">Contacto</a>
        </nav>
        <a
          href="#contacto"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-colors hover:bg-[var(--soft-orange-hover)] sm:inline-flex"
        >
          Marcar sessão
        </a>
      </div>
    </header>
  );
}