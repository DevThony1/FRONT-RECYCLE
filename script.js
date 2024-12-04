// Seleção de elementos
const agendarBtn = document.getElementById('agendar-btn');
const recompensasBtn = document.getElementById('recompensas-btn');
const formSection = document.getElementById('form-section');
const recompensasSection = document.getElementById('recompensas-section');
const agendamentoForm = document.getElementById('agendamento-form');
const copiarLinkBtn = document.getElementById('copiar-link-btn');

// Mostrar formulário de agendamento
agendarBtn.addEventListener('click', () => {
    formSection.classList.remove('hidden');
    recompensasSection.classList.add('hidden');
});

// Mostrar seção de recompensas
recompensasBtn.addEventListener('click', () => {
    recompensasSection.classList.remove('hidden');
    formSection.classList.add('hidden');
});

// Manipular envio do formulário
agendamentoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Agendamento realizado com sucesso!');
    agendamentoForm.reset();
    formSection.classList.add('hidden');
});

// Copiar link para área de transferência
copiarLinkBtn.addEventListener('click', () => {
    const conviteLink = document.getElementById('convite-link');
    conviteLink.select();
    document.execCommand('copy');
    alert('Link copiado para a área de transferência!');
});
