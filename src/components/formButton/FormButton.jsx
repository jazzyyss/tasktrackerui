import './formButton.css'

const FormButton = ({ children, commentButton, ...rest }) => {
    return (
        <div className={`button-container`}>
            <button className="button" {...rest}>{children}</button>
        </div>
    );
}

export default FormButton;
