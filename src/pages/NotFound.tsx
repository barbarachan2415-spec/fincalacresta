import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const TITLE = "Página no encontrada (404) | Finca La Cresta";
const DESCRIPTION =
  "La página que buscas no existe. Vuelve al inicio de Finca La Cresta para conocer nuestra leche fresca de búfalo y vaca.";

function upsertMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
  return el;
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  return el;
}

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const canonical = `https://fincalacresta.lovable.app${location.pathname}`;
    const prevTitle = document.title;
    const prevDescription =
      document.head
        .querySelector<HTMLMetaElement>('meta[name="description"]')
        ?.getAttribute("content") ?? "";
    const prevRobots =
      document.head
        .querySelector<HTMLMetaElement>('meta[name="robots"]')
        ?.getAttribute("content") ?? "index, follow";
    const prevCanonical =
      document.head
        .querySelector<HTMLLinkElement>('link[rel="canonical"]')
        ?.getAttribute("href") ?? "https://fincalacresta.lovable.app/";
    const prevOgTitle =
      document.head
        .querySelector<HTMLMetaElement>('meta[property="og:title"]')
        ?.getAttribute("content") ?? "";
    const prevOgDescription =
      document.head
        .querySelector<HTMLMetaElement>('meta[property="og:description"]')
        ?.getAttribute("content") ?? "";
    const prevOgUrl =
      document.head
        .querySelector<HTMLMetaElement>('meta[property="og:url"]')
        ?.getAttribute("content") ?? "https://fincalacresta.lovable.app/";

    document.title = TITLE;
    upsertMeta('meta[name="description"]', "name", "description", DESCRIPTION);
    upsertMeta('meta[name="robots"]', "name", "robots", "noindex, follow");
    upsertCanonical(canonical);
    upsertMeta('meta[property="og:title"]', "property", "og:title", TITLE);
    upsertMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      "La página solicitada no está disponible en Finca La Cresta.",
    );
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonical);

    return () => {
      document.title = prevTitle;
      upsertMeta('meta[name="description"]', "name", "description", prevDescription);
      upsertMeta('meta[name="robots"]', "name", "robots", prevRobots);
      upsertCanonical(prevCanonical);
      upsertMeta('meta[property="og:title"]', "property", "og:title", prevOgTitle);
      upsertMeta(
        'meta[property="og:description"]',
        "property",
        "og:description",
        prevOgDescription,
      );
      upsertMeta('meta[property="og:url"]', "property", "og:url", prevOgUrl);
    };
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Página no encontrada</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Volver al inicio
        </a>
      </div>
    </main>
  );
};

export default NotFound;
