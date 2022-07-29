import React from 'react';
import { useNavigate} from "react-router-dom";
import DocumentsContent from "./DocumentsContent";

const Documents = () => {

    const navigate = useNavigate();

    return (
        <section className="documents">
            <div className="container">
                <h2 className="title">
                    Документы
                </h2>
                <DocumentsContent/>
                <button className="btn documents__btn" type={'button'} onClick={() => navigate('/document')}>
                    Все документы
                </button>
            </div>

        </section>
    );
};

export default Documents;