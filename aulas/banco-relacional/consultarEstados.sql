select * from estados

select nome, sigla from estados
where regiao = 'Sul'

select nome,regiao from estados
WHERE populacao >=10
order by populacao desc