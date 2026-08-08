import "./Button.scss";

function Button({
  children,
  type = "button",
  variant = "primary",
  href,
  onClick,
}) {
  if (href) {
    return (
      <a href={href} className={`button button--${variant}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`button button--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;