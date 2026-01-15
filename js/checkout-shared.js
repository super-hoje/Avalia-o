const baseLinks = {
    up1: "https://pay.finalizepagamento.store/695410e9ede5279f00b12e64", // IOF
    up2: "https://pay.finalizepagamento.store/695418c3795ed29f33a38f82", // Taxa de verificação de IOF
    up3: "https://pay.finalizepagamento.store/69541a63a1fcd46a2127c5af", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.finalizepagamento.store/69541ab8ede5279f00b13ad6", // NFe
    up5: "https://pay.finalizepagamento.store/69541af2795ed29f33a392bb", // Ativar conta
    up6: "https://pay.finalizepagamento.store/69541b24ede5279f00b13bda", // Taxa de registro do contrato
    up7: "https://pay.finalizepagamento.store/69541b98a1fcd46a2127c7cb", // Parabéns, 20k adicional
    up8: "https://pay.finalizepagamento.store/69541bd9a1fcd46a2127c832", // Erro no pagamento - 14,06
    up9: "https://pay.finalizepagamento.store/69541c25a1fcd46a2127c8b9", // APP - 11,99
    up10:"https://pay.finalizepagamento.store/69541c5d795ed29f33a39534", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.finalizepagamento.store/69541c99a1fcd46a2127c968", // Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.finalizepagamento.store/69541ccdede5279f00b13f04" // Taxa de Processamento Administrativo - 31,92

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

