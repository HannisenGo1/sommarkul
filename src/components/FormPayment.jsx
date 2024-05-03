import React, { useState } from 'react';


const FormPayment = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [postalCodeError, setPostalCodeError] = useState('');
    
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isAddressValid, setIsAddressValid] = useState(false);
    const [isPostalCodeValid, setIsPostalCodeValid] = useState(false);
    
    const handleBlurName = () => {
        validateName();
    };
    
    const handleBlurEmail = () => {
        validateEmail();
    };
    
    const handleBlurPhone = () => {
        validatePhone();
    };

    const handleBlurAddress = () => {
        validateAddress();
    };

    const handleBlurPostalCode = () => {
        validatePostalCode();
    };
    
    const validateName = () => {
        if (!name.trim()) {
            setNameError('Vänligen fyll i ditt namn');
            setIsNameValid(false);
        } else {
            setNameError('');
            setIsNameValid(true);
        }
    };
    
    const validateEmail = () => {
        if (!isValidEmail(email)) {
            setEmailError('Felaktig Email');
            setIsEmailValid(false);
        } else {
            setEmailError('');
            setIsEmailValid(true);
        }
    };

    const validatePhone = () => {
        let phoneNumber = phone.replace(/[^0-9.-]/g, '');
        if (phoneNumber === '' || phoneNumber.length < 10) {
            setPhoneError('Felaktigt mobilnummer');
            setIsPhoneValid(false);
        } else {
            setPhoneError('');
            setIsPhoneValid(true);
        }
    };

    const validateAddress = () => {
        if (!address.trim()) {
            setAddressError('Vänligen fyll i din adress');
            setIsAddressValid(false);
        } else {
            setAddressError('');
            setIsAddressValid(true);
        }
    };

    const validatePostalCode = () => {
        if (!postalCode.trim()) {
            setPostalCodeError('Vänligen fyll i ditt postnummer');
            setIsPostalCodeValid(false);
        } else {
            setPostalCodeError('');
            setIsPostalCodeValid(true);
        }
    };
    
    const isValidEmail = (email) => {
        return email.length > 3 && email.includes('@');
    };

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        validateName();
        validateEmail();
        validatePhone();
        validateAddress();
        validatePostalCode();
        
        if (isNameValid && isEmailValid && isPhoneValid && isAddressValid && isPostalCodeValid) {
            // Skicka formuläret
            console.log('Formuläret är giltigt. Skickar...');
            togglePopup();
        } else {
            console.log('Formuläret är ogiltigt. Vänligen fyll i alla fält korrekt.');
        }
    };

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };
    
    return (
        <>
        <div className="paymentForm">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="name">Namn</label>
        <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={handleBlurName}
        />
        <p className={`error-message ${nameError ? 'visible' : ''}`}>{nameError}&nbsp;</p>
        </div>
        <div className="form-group">
        <label htmlFor="address">Adress</label>
        <input
        id="address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        onBlur={handleBlurAddress}
        />
        <p className={`error-message ${addressError ? 'visible' : ''}`}>{addressError}&nbsp;</p>
        </div>
        <div className="form-group">
        <label htmlFor="postalCode">Postnummer</label>
        <input
        id="postalCode"
        type="text"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        onBlur={handleBlurPostalCode}
        />
        <p className={`error-message ${postalCodeError ? 'visible' : ''}`}>{postalCodeError}&nbsp;</p>
        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
        id="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleBlurEmail}
        />
        <p className={`error-message ${emailError ? 'visible' : ''}`}>{emailError}&nbsp;</p>
        </div>
        <div className="form-group">
        <label htmlFor="phone">Mobilnummer</label>
        <input
        id="phone"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        onBlur={handleBlurPhone}
        />
        <p className={`error-message ${phoneError ? 'visible' : ''}`}>{phoneError}&nbsp;</p>
        </div>
        <div className="paymentbtndiv">
        <button className="pay-btn" type="submit">
        Betala
        </button>
        </div>
        </form>
        {isPopupVisible && (
            <div className="popup">
                <p>Beställning genomförd</p>
            </div>
        )}
        </div>
        </>
    );
};

export default FormPayment;




