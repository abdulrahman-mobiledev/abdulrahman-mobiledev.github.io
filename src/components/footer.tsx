const FOOTER_LINK_CLASS =
  "inline-block py-2 -my-2 text-paper transition-colors hover:text-accent";

export function Footer() {
  return (
    <footer className="border-t border-rule px-5 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between">
        <nav className="flex flex-wrap items-baseline gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] sm:text-[11px]">
          <a
            href="mailto:abdulrahman.mohammed.dev@gmail.com"
            className={FOOTER_LINK_CLASS}
          >
            Email
          </a>
          <a
            href="/abdulrahman-mohammed-cv.pdf"
            className={FOOTER_LINK_CLASS}
          >
            CV
          </a>
          <a
            href="https://github.com/abdulrahman-mobiledev"
            target="_blank"
            rel="noreferrer noopener"
            className={FOOTER_LINK_CLASS}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdulrahman-mohammed-yassin/"
            target="_blank"
            rel="noreferrer noopener"
            className={FOOTER_LINK_CLASS}
          >
            LinkedIn
          </a>
        </nav>
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:text-[11px]">
          <span>Arabic, English</span>
          <span>2026 · v.1</span>
        </div>
      </div>
    </footer>
  );
}
