import { NeonButton } from "./Neon-Button";
import "../../css/background.css";
import { Background } from "../components/Background";
import "../../css/login.css";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

export function Login() {
  return (
    <Background>
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <div className="logo-container">
              <img
                src="/imgs/spoti-logo.svg"
                alt="Spotify Logo"
                className="logo-img"
              />
            </div>
            <h2 className="title">Spotidados</h2>
            <p className="subtitle">
              Elizabeth Farinha, Felipe Chinita e José Rodrigues
            </p>
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
                    placeholder="Digite seu e-mail"
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
                    href="../dashboard"
                    borderStartColor="#bb00ff"
                    borderEndColor="#bb00ff"
                    textColor="#fff"
                    backgroundColor="#1f2933" 
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
                  <a href="#" className="forgot-link">
                    Esqueci minha password
                  </a>
                </div>
              </form>

              <div className="divider">
                <span>Ou entre com</span>
              </div>

              <div className="social-login">
                <button className="social-btn" title="Facebook">
                  <FaFacebookF size={20} color="#fff" />
                </button>
                <button className="social-btn" title="Google">
                  <FaGoogle size={20} color="#fff" />
                </button>
                <button className="social-btn" title="GitHub">
                  <FaGithub size={20} color="#fff" />
                </button>
              </div>

              <p className="signup-text">
                Não tens uma conta?
                <a href="#"> Cadastre-se agora</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
