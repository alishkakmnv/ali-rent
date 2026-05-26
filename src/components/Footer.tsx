export function Footer() {
  return (
    <footer className="py-8 bg-[#0A0A0A] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-600">
          <p>
            Ali Servis · Аренда спецтехники в Алматы &copy; {new Date().getFullYear()}
          </p>
          <p>
            Сайт разработан{' '}
            <a
              href="https://azian.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-[var(--accent)] transition-colors duration-200"
            >
              Azian Company
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
