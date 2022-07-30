import React from 'react';

const FooterCallBack = () => {
    return (
        <div className="footer__callBack">
            <div className="footer__btns">
                <button className="btn footer__btn">Личный кабинет</button>
                <button className="btn footer__btn">Оплатить</button>
            </div>
            <div className="footer__tel">
                <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.51117 13.5615C4.61432 13.4583 4.75421 13.4004 4.90009 13.4004H7.1001C7.24597 13.4004 7.38586 13.4583 7.48901 13.5615C7.59216 13.6646 7.65009 13.8045 7.65009 13.9504C7.65009 14.0963 7.59216 14.2362 7.48901 14.3393C7.38586 14.4424 7.24597 14.5004 7.1001 14.5004H4.90009C4.75421 14.5004 4.61432 14.4424 4.51117 14.3393C4.40802 14.2362 4.3501 14.0963 4.3501 13.9504C4.3501 13.8045 4.40802 13.6646 4.51117 13.5615Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.14435 0.844559C1.55695 0.431976 2.11652 0.200195 2.70001 0.200195H9.29999C9.88348 0.200195 10.4431 0.431976 10.8557 0.844559C11.2682 1.25714 11.5 1.81671 11.5 2.40019V15.6002C11.5 16.1837 11.2682 16.7433 10.8557 17.1558C10.4431 17.5684 9.88348 17.8002 9.29999 17.8002H2.70001C2.11652 17.8002 1.55695 17.5684 1.14435 17.1558C0.731812 16.7433 0.5 16.1837 0.5 15.6002V2.40019C0.5 1.81671 0.731812 1.25714 1.14435 0.844559ZM1.92218 1.62238C1.71588 1.82867 1.59998 2.10846 1.59998 2.40019V15.6002C1.59998 15.8919 1.71588 16.1717 1.92218 16.378C2.12848 16.5843 2.40826 16.7002 2.70001 16.7002H9.29999C9.59174 16.7002 9.87152 16.5843 10.0778 16.378C10.2841 16.1717 10.4 15.8919 10.4 15.6002V2.40019C10.4 2.10846 10.2841 1.82867 10.0778 1.62238C9.87152 1.41609 9.59174 1.3002 9.29999 1.3002H2.70001C2.40826 1.3002 2.12848 1.41609 1.92218 1.62238Z" fill="white"/>
                </svg>

                <a href="tel: +74725439720" className="footer__tel-link">
                    +7 (4725) 43-97-20
                </a>
                <p className="footer__tel-text">
                    круглосуточно
                </p>
            </div>
            <div className="footer__social">
                <a href="www.whatsapp.com" className="footer__social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.00481605 24L1.62722 18.0384C0.558181 16.2058 -0.00346876 14.1216 1.61187e-05 12C1.61187e-05 5.3724 5.37241 0 12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24C9.87934 24.0034 7.796 23.4422 5.96401 22.374L0.00481605 24ZM7.66921 6.3696C7.51425 6.37922 7.36282 6.42003 7.22401 6.4896C7.09384 6.56331 6.97501 6.65547 6.87121 6.7632C6.72721 6.8988 6.64561 7.0164 6.55801 7.1304C6.11451 7.70759 5.87594 8.4161 5.88001 9.14399C5.88241 9.73199 6.03601 10.3044 6.27601 10.8396C6.76681 11.922 7.57441 13.068 8.64121 14.13C8.89801 14.3856 9.14881 14.6424 9.41881 14.8812C10.7429 16.0469 12.3207 16.8876 14.0268 17.3364L14.7096 17.4408C14.9316 17.4528 15.1536 17.436 15.3768 17.4252C15.7263 17.4071 16.0675 17.3125 16.3764 17.148C16.5336 17.067 16.6869 16.979 16.836 16.884C16.836 16.884 16.8876 16.8504 16.986 16.776C17.148 16.656 17.2476 16.5708 17.382 16.4304C17.4816 16.3272 17.568 16.206 17.634 16.068C17.7276 15.8724 17.8212 15.4992 17.8596 15.1884C17.8884 14.9508 17.88 14.8212 17.8764 14.7408C17.8716 14.6124 17.7648 14.4792 17.6484 14.4228L16.95 14.1096C16.95 14.1096 15.906 13.6548 15.2688 13.3644C15.2016 13.3351 15.1296 13.3184 15.0564 13.3152C14.9743 13.3068 14.8913 13.316 14.8131 13.3423C14.7349 13.3686 14.6632 13.4113 14.6028 13.4676V13.4652C14.5968 13.4652 14.5164 13.5336 13.6488 14.5848C13.599 14.6517 13.5304 14.7023 13.4518 14.7301C13.3731 14.7578 13.288 14.7616 13.2072 14.7408C13.129 14.7199 13.0524 14.6934 12.978 14.6616C12.8292 14.5992 12.7776 14.5752 12.6756 14.5308L12.6696 14.5284C11.9831 14.2287 11.3475 13.8238 10.7856 13.3284C10.6344 13.1964 10.494 13.0524 10.35 12.9132C9.8779 12.4611 9.46647 11.9496 9.12601 11.3916L9.05521 11.2776C9.00436 11.201 8.96324 11.1184 8.93281 11.0316C8.88721 10.8552 9.00601 10.7136 9.00601 10.7136C9.00601 10.7136 9.29761 10.3944 9.43321 10.2216C9.54612 10.078 9.65146 9.92858 9.74881 9.77399C9.89041 9.54599 9.93481 9.31199 9.86041 9.13079C9.52441 8.30999 9.17641 7.49279 8.81881 6.6816C8.74801 6.5208 8.53801 6.4056 8.34721 6.3828C8.28241 6.3756 8.21761 6.3684 8.15281 6.3636C7.99166 6.35559 7.83017 6.35719 7.66921 6.3684V6.3696Z" fill="white"/>
                    </svg>
                </a>
                <a href="web.telegram.org" className="footer__social-link">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25 12C25 18.627 19.4031 24 12.5 24C5.59687 24 0 18.627 0 12C0 5.373 5.59687 0 12.5 0C19.4031 0 25 5.373 25 12ZM12.9479 8.859C11.7323 9.344 9.30208 10.349 5.65833 11.873C5.06667 12.099 4.75625 12.32 4.72812 12.536C4.68021 12.902 5.15729 13.046 5.80521 13.241C5.89375 13.268 5.98542 13.295 6.07917 13.325C6.71771 13.524 7.57604 13.757 8.02188 13.766C8.42708 13.774 8.87917 13.614 9.37813 13.286C12.7823 11.079 14.5396 9.964 14.65 9.94C14.7281 9.923 14.8365 9.901 14.9094 9.964C14.9823 10.026 14.975 10.144 14.9677 10.176C14.9198 10.369 13.051 12.038 12.0823 12.902C11.7802 13.171 11.5667 13.362 11.5229 13.406C11.425 13.503 11.325 13.596 11.2292 13.685C10.6354 14.233 10.1917 14.645 11.2542 15.317C11.7646 15.64 12.1729 15.907 12.5802 16.173C13.025 16.464 13.4688 16.754 14.0437 17.116C14.1896 17.208 14.3292 17.303 14.4656 17.396C14.9833 17.751 15.449 18.069 16.024 18.019C16.3573 17.989 16.7031 17.688 16.8781 16.789C17.2917 14.663 18.1062 10.059 18.2948 8.161C18.3063 8.00341 18.2993 7.84509 18.274 7.689C18.2588 7.56293 18.1949 7.44693 18.0948 7.364C17.9458 7.247 17.7146 7.222 17.6104 7.224C17.1406 7.232 16.4198 7.473 12.9479 8.859Z" fill="white"/>
                    </svg>

                </a>
            </div>
        </div>
    );
};

export default FooterCallBack;