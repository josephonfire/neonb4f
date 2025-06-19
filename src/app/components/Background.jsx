import "../../css/login.css";

export function Background({ children }) {
  return (
    <div className="neon-background">
  <div className="neon-frame">
    {children}
  </div>
</div>
  );
}