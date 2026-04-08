import Link from "next/link";
import type { LocaleContent } from "@/lib/data";
import type { Locale } from "@/lib/i18n";

interface FooterProps {
  content: LocaleContent;
  locale: Locale;
}

function resolveFooterHref(locale: Locale, href: string): string {
  if (href.startsWith("http://") || href.startsWith("https://")) return href;
  if (href.startsWith("#")) return `/${locale}${href}`;
  if (href.startsWith("/")) return href;
  return `/${locale}/${href}`;
}

export function Footer({ content, locale }: FooterProps) {
  const { footerLinks, footerSocialLinks, siteContent } = content;
  const phoneHref = `tel:${siteContent.footer.phoneValue.replace(/[^\d+]/g, "")}`;

  return (
    <footer className="bg-brand-black px-4 pb-8 pt-16 text-white">
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-display text-6xl uppercase leading-none text-white sm:text-8xl">
          {siteContent.brand.name}
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-3xl uppercase text-brand-red">
              {siteContent.footer.linksTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link
                    href={resolveFooterHref(locale, link.href)}
                    className="font-body text-sm uppercase tracking-wide text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-3xl uppercase text-brand-red">
              {siteContent.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm">
              <li>{`${siteContent.footer.emailLabel}: ${siteContent.footer.emailValue}`}</li>
              <li>
                {`${siteContent.footer.phoneLabel}: `}
                <a
                  href={phoneHref}
                  className="underline decoration-brand-red underline-offset-2 transition-colors hover:text-brand-red"
                >
                  {siteContent.footer.phoneValue}
                </a>
              </li>
              <li>
                {`${siteContent.footer.locationLabel}: `}
                <Link
                  href={siteContent.footer.locationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-brand-red underline-offset-2 transition-colors hover:text-brand-red"
                >
                  {siteContent.footer.locationValue}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-3xl uppercase text-brand-red">
              {siteContent.footer.socialsTitle}
            </h3>
            <ul className="mt-4 flex items-center gap-4">
              {footerSocialLinks.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-red text-brand-red transition-colors hover:bg-brand-red hover:text-black"
                    aria-label={social.label}
                  >
                    <svg
                      viewBox={social.viewBox}
                      className="h-5 w-5"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d={social.iconPath} />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-brand-red" />

        <div className="flex flex-col justify-between gap-3 font-body text-xs uppercase tracking-wide text-white sm:flex-row">
          <p>{`${siteContent.symbols.copyright} ${new Date().getFullYear()} ${siteContent.brand.name}. ${siteContent.brand.footerRights}`}</p>
          <Link href={resolveFooterHref(locale, siteContent.brand.privacyHref)}>
            {siteContent.brand.privacyLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}
