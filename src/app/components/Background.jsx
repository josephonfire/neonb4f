import "../../css/login.css";
import "../../css/background.css";
export function Background({ children }) {
  return (
    <div className="neon-background">
      <div className="neon-frame">
        {children}
      </div>
    </div>
  );
}