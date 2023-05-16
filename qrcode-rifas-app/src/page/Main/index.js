import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';

import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";

function Main() {

    const searchParams = new URLSearchParams(document.location.search)

    const [link, setLink] = useState(searchParams.get('samuel') || '');
    const [qrcodeLink, setQrcodeLink] = useState('');

    function handleGenerate(link_url) {
        QRCodeLink.toDataURL(link_url, {
            width: 600,
            margin: 3,
        }, function (err, url) {
            setQrcodeLink(url);
        })
    }

    function handleQrcode(e) {
        setLink(e.target.value);
        handleGenerate(e.target.value);
    }

    return (
        <div className="App">

            <main className="main min-h-screen px-5 py-5 grid grid-cols-2 items-center drop-shadow-xl">

                <div className="description">
                    <h1>Área para Descrição</h1>
                </div>

                <div>

                    <div className="card flex flex-col justify-content-center mb-10">
                        <QRCode className="hidden" value={link} />
                        <h1 className="title-input text-3xl font-bold mb-5">Insira o link da sua rifa</h1>
                        <InputText type="URL" placeholder="https://www.suarifa.com.br" value={link} onChange={(e) => handleQrcode(e)} />
                    </div>


                    <div className="card flex flex-wrap justify-content-center gap-3 d-none">
                        
                        <a href={qrcodeLink} download={"qrcode.png"}>
                        <Button label="Gerar QR Code"/>
                        </a>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default Main;