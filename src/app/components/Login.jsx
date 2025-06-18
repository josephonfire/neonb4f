import { NeonButton } from "./Neon-Button";
import "../../css/login.css";

export function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <div className="logo-container">
              <img src="/imgs/spoti-logo.svg" alt="Spotify Logo" className="logo-img" />
            </div>
            <h2 className="title">Spotidados</h2>
            <p className="subtitle">asd</p>
          </div>

          <div className="login-card">
            <div className="card-body">
              <form className="form">
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Bom dia flor"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                  />
                </div>

                <div className="login-button-wrapper">
                  <NeonButton
                    borderStartColor="#a21caf"
                    borderEndColor="#f472b6"
                    textColor="#fff"
                    backgroundColor="transparent"
                    className="neon-login-button"
                  >
                    <span>Login</span>
                  </NeonButton>
                </div>

                <div className="remember-forgot">
                  <label className="remember">
                    <input type="checkbox" name="remember-me" />
                    Lembrar minha password
                  </label>
                  <a href="#" className="forgot-link">Esqueci minha password</a>
                </div>
              </form>

              <div className="divider">
                <span>Ou entre com</span>
              </div>

              <div className="social-login">
                <button className="social-btn facebook" title="Facebook"></button>
                <button className="social-btn google" title="Google"></button>
                <button className="social-btn github" title="GitHub"></button>
              </div>

              <p className="signup-text">
                Não tens uma conta?
                <a href="#"> Cadastre-se agora</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
