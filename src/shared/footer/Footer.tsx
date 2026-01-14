import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>FitStore</h2>
          <p>Suplementos de qualidade para sua performance.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Institucional</h4>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Termos de uso</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">WhatsApp</a></li>
          </ul>
        </div>

        

        {/* Ajuda */}
        <div className="footer-links">
          <h4>Ajuda</h4>
          <ul>
            <li><a href="#">Dúvidas frequentes</a></li>
            <li><a href="#">Trocas e devoluções</a></li>
            <li><a href="#">Formas de pagamento</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} FitStore. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;
