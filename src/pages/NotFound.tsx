import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const canonical = `https://fincalacresta.lovable.app${location.pathname}`;

  return (
    <>
      <Helmet>
        <title>Página no encontrada (404) | Finca La Cresta</title>
        <meta
          name="description"
          content="La página que buscas no existe. Vuelve al inicio de Finca La Cresta para conocer nuestra leche fresca de búfalo y vaca."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Página no encontrada (404) | Finca La Cresta" />
        <meta
          property="og:description"
          content="La página solicitada no está disponible en Finca La Cresta."
        />
        <meta property="og:url" content={canonical} />
      </Helmet>
      <main className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Página no encontrada</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Volver al inicio
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
