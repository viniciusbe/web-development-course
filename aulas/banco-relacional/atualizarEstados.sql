update estados
set populacao = 11.32
WHERE sigla = 'PR'

-- Caso tenho mais de um tabela com colunas de mesmo nome

select 
    est.nome,
    sigla,
    populacao,
from estados est
WHERE sigla = 'PR'