// Banco de respostas do Mascote
const respostas = {
    seguranca: "A segurança é nossa prioridade absoluta! Todos os prestadores no Ixivia passam por verificação de identidade e têm avaliações de outros vizinhos. <br><br><strong>Baixe o app e escolha apenas os mais bem avaliados!</strong>",
    
    transporte: "Você que manda! Ao fazer o pedido, você escolhe se vai levar até a casa do vizinho ou se quer que ele busque e entregue na sua porta. <br><br><strong>Baixe o app e faça seu 1º pedido com entrega!</strong>",
    
    recebimento: "O pagamento é 100% seguro pelo aplicativo. O cliente paga antes, o dinheiro fica guardado, e assim que você entrega a roupa limpa, cai direto na sua conta. Sem calotes. <br><br><strong>Baixe o app para cadastrar sua chave PIX!</strong>",
    
    preco: "Aqui não tem preço fixo. Você negocia direto! O cliente faz uma oferta e o parceiro aceita, simples assim. <br><br><strong>Baixe o aplicativo para ver quanto estão pagando na sua rua agora!</strong>"
};

// Função acionada pelos botões de pergunta
function responderFAQ(tema) {
    const balao = document.getElementById('balao-resposta');
    
    // Troca o texto dentro do balão pegando a resposta correspondente
    balao.innerHTML = respostas[tema];
    
    // Remove a classe 'hidden' para o balão aparecer na tela
    balao.classList.remove('hidden');
    
    // Opcional: Reinicia a animação do balão
    balao.style.animation = 'none';
    setTimeout(() => {
        balao.style.animation = 'aparecer 0.3s ease-out forwards';
    }, 10);
}
