const Button = ({tailwindClass, text}) => {
    return (
        <button className={tailwindClass}>
            {text}
        </button>
    );
}

export default Button;