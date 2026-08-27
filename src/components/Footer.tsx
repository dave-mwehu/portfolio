export function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-mark" href="#top" aria-label="Retour en haut de page">
        DM
      </a>
      <div>
        <p>© {new Date().getFullYear()} David Mwehu Munde.</p>
        <span>Conçu et développé avec React & TypeScript.</span>
      </div>
      <a className="back-to-top" href="#top">
        Retour en haut <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
