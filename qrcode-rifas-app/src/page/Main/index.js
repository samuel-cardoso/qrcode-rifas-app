import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';

import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";

import logo from './img/logo-qrcoderifas.png'


export default function Main() {
    const searchParams = new URLSearchParams(document.location.search);

    const [link, setLink] = useState(searchParams.get('link') || '');
    const [qrcodeLink, setQrcodeLink] = useState('');
    const [isValidUrl, setIsValidUrl] = useState(true);

    function handleGenerate(link_url) {
        QRCodeLink.toDataURL(link_url, {
            width: 600,
            margin: 3,
        }, function (err, url) {
            setQrcodeLink(url);
        });
    }

    function handleQrcode(e) {
        const inputUrl = e.target.value;
        setLink(inputUrl);
        setIsValidUrl(validateUrl(inputUrl));
        if (isValidUrl) {
            handleGenerate(inputUrl);
        }
    }

    function validateUrl(url) {
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return url.match(urlRegex);
    }

    function handleDownload(e) {
        if (!isValidUrl) {
            e.preventDefault();
        }
    }

    return (
        <div className="App">
            <main className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col justify-center">
                            <img src={logo} className="w-60 mb-10 mx-auto" alt="Logo" />
                            <h1 className="text-4xl md:text-5xlxl text-center leading-tight">
                                Gere em poucos segundos um <span>QR Code</span> para sua Rifa!
                            </h1>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="card bg-white px-12 py-20 rounded-md shadow-md">
                                <QRCode className="hidden" value={link} />
                                <h1 className="text-2xl md:text-2xl font-bold mb-5">
                                    Insira o link da sua rifa
                                </h1>
                                <div className="mb-4">
                                    <InputText
                                        type="URL"
                                        placeholder="https://www.suarifa.com.br"
                                        value={link}
                                        onChange={handleQrcode}
                                        className={!isValidUrl ? "p-invalid" : ""}
                                    />
                                </div>
                                {!isValidUrl && <small className="text-red-500">Por favor, digite uma URL válida.</small>}
                                <div className="flex flex-wrap justify-center gap-3 mt-7">
                                    <a className="w-full" href={qrcodeLink} download={isValidUrl ? "qrcode.png" : ""} onClick={handleDownload}>
                                        <Button className="rounded-full" label="Gerar QR Code" disabled={!isValidUrl} />
                                    </a>
                                </div>
                            </
                            div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}