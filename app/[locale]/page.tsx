import { notFound } from "next/navigation";
import { getDictionary, hasLocale, isRtl, type Locale } from "@/lib/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConceptSection from "@/components/ConceptSection";
import ModelSection from "@/components/ModelSection";
import ProductsSection from "@/components/ProductsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CreateWaveSection from "@/components/CreateWaveSection";
import Footer from "@/components/Footer";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const t = await getDictionary(locale as Locale);
  const arrow = isRtl(locale as Locale) ? "←" : "→";

  const footerLinks = [
    { href: "#concept", label: t.nav.concept },
    { href: "#model", label: t.nav.model },
    { href: "#products", label: t.nav.products },
    { href: "#create-wave", label: t.nav.createWave },
  ];

  return (
    <>
      <Header locale={locale} brand={t.brand.name} nav={t.nav} />
      <main>
        <Hero
          brand={t.brand.name}
          eyebrow={t.hero.eyebrow}
          headline={t.hero.headline}
          subheadline={t.hero.subheadline}
          ctaPrimary={t.hero.ctaPrimary}
          ctaSecondary={t.hero.ctaSecondary}
          flow={t.hero.flow}
          orbits={t.hero.orbits}
          arrow={arrow}
        />
        <ConceptSection
          label={t.concept.label}
          title={t.concept.title}
          body={t.concept.body}
          flow={t.concept.flow}
          arrow={arrow}
        />
        <ModelSection
          label={t.model.label}
          title={t.model.title}
          body={t.model.body}
          steps={t.model.steps}
        />
        <ProductsSection
          label={t.products.label}
          title={t.products.title}
          body={t.products.body}
          cards={t.products.cards}
        />
        <CapabilitiesSection
          label={t.capabilities.label}
          title={t.capabilities.title}
          intro={t.capabilities.intro}
          cards={t.capabilities.cards}
        />
        <CreateWaveSection
          label={t.createWave.label}
          title={t.createWave.title}
          body={t.createWave.body}
          form={t.createWave.form}
        />
      </main>
      <Footer
        brand={t.brand.name}
        tagline={t.brand.tagline}
        navLabel={t.footer.nav}
        rights={t.footer.rights}
        links={footerLinks}
      />
    </>
  );
}
