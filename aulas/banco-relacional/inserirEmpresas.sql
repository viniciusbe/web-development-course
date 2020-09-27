INSERT INTO empresas
    (nome,cnpj)
VALUES
    ('Bradesco', 567657567756),
    ('cale', 567657567750),
    ('Cielo', 567657567759);

ALTER TABLE empresas MODIFY cnpj VARCHAR(12)

desc empresas;


INSERT INTO empresas_unidades
    (empresa_id,cidade_id, sede)
VALUES
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,0);