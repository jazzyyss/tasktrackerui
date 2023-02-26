import './formInput.css'

const FormInput = ({ handleChange, ...rest }) => {
    return (
        <div className="form-input-container">
            <input className="form-input" onChange={handleChange} {...rest} />
        </div>
    );
}

export default FormInput;
