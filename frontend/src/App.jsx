import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo">PortFlow</h1>
          <nav className="nav">
            <a href="#home">Início</a>
            <a href="#about">Sobre</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="profile-section">
                <img 
                  src="/profile/Me.jpeg" 
                  alt="Profile Picture" 
                  className="profile-picture"
                />
              </div>
              <div className="hero-text">
                <h1 className="hero-title">Bem-vindo ao PortFlow</h1>
                <p className="hero-subtitle">
                  A tua plataforma para criar e gerir portfolios profissionais
                </p>
                <button className="cta-button">Começar Agora</button>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2>Funcionalidades</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Fácil de Usar</h3>
                <p>Interface intuitiva e simples</p>
              </div>
              <div className="feature-card">
                <h3>Profissional</h3>
                <p>Templates modernos e elegantes</p>
              </div>
              <div className="feature-card">
                <h3>Responsivo</h3>
                <p>Funciona em todos os dispositivos</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 PortFlow. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App