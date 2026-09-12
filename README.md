# QR Code Rifas App

Aplicação web em React para gerar rapidamente um QR Code a partir do link de uma rifa, com opção de download da imagem gerada.

## Funcionalidades

- Campo de entrada para o link da rifa, com validação de URL.
- Geração automática do QR Code conforme o link é digitado.
- Download do QR Code gerado em PNG.
- Suporte a link pré-preenchido via query string (`?link=...`).

## Tecnologias

- React 18
- PrimeReact / PrimeIcons (componentes de UI)
- Tailwind CSS
- `qrcode` / `qrcode.react` / `react-qr-code`
- React Router DOM

## Como rodar

```bash
npm install
npm start
```

Acesse `http://localhost:3000`.

### Outros scripts

```bash
npm run build   # build de produção
npm test        # executa os testes
```

## Estrutura

```
src/
  App.js              # Componente raiz e rotas
  page/Main/           # Página principal (formulário + geração do QR Code)
  styles/global.css    # Estilos globais
public/                 # Assets estáticos (favicon, manifest, etc.)
```
