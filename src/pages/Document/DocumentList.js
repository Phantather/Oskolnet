import React from 'react';

const DocumentList = ({title, text1, price1, text2, price2}) => {
    return (
        <ul className="document__list">
            <li className="document__item-title">
                {title}
            </li>
            <li className="document__item">
                <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.71881 19.8554H19.2634M2.49927 1.00771C2.0982 1.01757 1.71689 1.18385 1.43675 1.47104C1.15662 1.75823 0.999879 2.14356 1 2.54475V29.5255C0.999874 29.9265 1.15651 30.3117 1.43648 30.5989C1.71645 30.8861 2.09757 31.0524 2.4985 31.0625H23.4837C23.8913 31.0625 24.2823 30.9006 24.5705 30.6123C24.8588 30.3241 25.0207 29.9331 25.0207 29.5255V8.68675H18.8718C18.4706 8.67689 18.0891 8.5105 17.809 8.22315C17.5288 7.93579 17.3722 7.55026 17.3725 7.14894V1L2.49927 1.00771ZM17.3031 1.00771L24.9822 8.68675L17.3031 1.00771ZM6.71881 15.2049H19.2634H6.71881ZM6.71881 24.5058H19.2634H6.71881Z" stroke="#6984F0" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="document__text">
                    {text1}
                    <span className="document__price">
                                {price1}
                            </span>
                </p>
            </li>
            <li className="document__item">
                <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.71881 19.8554H19.2634M2.49927 1.00771C2.0982 1.01757 1.71689 1.18385 1.43675 1.47104C1.15662 1.75823 0.999879 2.14356 1 2.54475V29.5255C0.999874 29.9265 1.15651 30.3117 1.43648 30.5989C1.71645 30.8861 2.09757 31.0524 2.4985 31.0625H23.4837C23.8913 31.0625 24.2823 30.9006 24.5705 30.6123C24.8588 30.3241 25.0207 29.9331 25.0207 29.5255V8.68675H18.8718C18.4706 8.67689 18.0891 8.5105 17.809 8.22315C17.5288 7.93579 17.3722 7.55026 17.3725 7.14894V1L2.49927 1.00771ZM17.3031 1.00771L24.9822 8.68675L17.3031 1.00771ZM6.71881 15.2049H19.2634H6.71881ZM6.71881 24.5058H19.2634H6.71881Z" stroke="#6984F0" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="document__text">
                    {text2}
                    <span className="document__price">
                                {price2}
                            </span>
                </p>
            </li>
        </ul>
    );
};

export default DocumentList;