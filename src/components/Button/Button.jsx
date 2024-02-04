const Button = ({ label, ...rest }) => {
  return (
    <button
      className={`${rest.className} font-serif py-1 px-4 flex rounded uppercase`}
    >
      {label}
    </button>
  );
};

export default Button;
