function abrirModalNotificacoes() {
  const modalEl = document.getElementById('modalNotificacoes');
  const modal = new bootstrap.Modal(modalEl);

  // Atualiza o título
  document.querySelector('.modal-title').textContent =
    'CARTA COMERCIAL - Comunicação formal entre empresas';

  // Corpo da carta adaptado para a Transporta TECH e destinatária Giovanna Grigolato
  document.querySelector('.modal-body').innerHTML = `
    <address>
      São Paulo, 22 de maio de 2025<br>
      <br>
      À<br>
      Sra. Giovanna Grigolato<br>
      Rua das Etecs Marcianas, 323 - Barra Bonita - São Paulo - SP<br>
    </address>

    <p>
      Prezada Sra. Giovanna Grigolato,
    </p>

    <p>
      A Transporta TECH tem o prazer de convidá-la a conhecer nossas soluções de logística integrada
      para e-commerce e distribuição. Gostaríamos de apresentar uma proposta personalizada para o
      transporte de suas mercadorias.
    </p>

    <p>
      Para tanto, solicitamos o envio de informações sobre o volume médio mensal de envios, tipos de
      produtos e principais rotas de entrega. Com esses dados, elaboraremos um orçamento completo,
      incluindo frete, seguro de carga e eventuais serviços adicionais.
    </p>

    <p>
      Agradecemos desde já a atenção e pedimos o retorno com as especificações até o dia
      <strong>30 de maio de 2025</strong>, para que possamos agendar uma reunião e apresentar
      nossa proposta em detalhes.
    </p>

    <p>
      Atenciosamente,
    </p>

    <p>
      <strong>Sara da Silva Leite</strong><br>
      Gerente de Contas Corporativas<br>
      Transporta TECH
    </p>
  `;

  modal.show();
}


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 5 },
            600: { items: 6 },
            1000: { items: 7 }
        }
    });
});