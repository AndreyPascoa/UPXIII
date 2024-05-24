USE UPXIII;

SELECT * FROM produto 

CREATE TABLE Responsavel (
    RC int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    senha VARCHAR(45) NOT NULL,
    tpPermissao int NOT NULL
);

CREATE TABLE Fornecedor (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    telefone VARCHAR(45) NOT NULL,
    endereco VARCHAR(45) NOT NULL
);

CREATE TABLE Produto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nomeProduto VARCHAR(45) NOT NULL,
    valor INT NOT NULL,
    categoria VARCHAR(45) NOT NULL,
    local VARCHAR(45) NOT NULL,
    quantidade INT NOT NULL,
    codigo INT NOT NULL,
    peso INT NOT NULL
);

CREATE TABLE Fornecedor_Produto (
    idFornecedor INT NOT NULL,
    idProduto INT NOT NULL,
    PRIMARY KEY (idFornecedor, idProduto),
    FOREIGN KEY (idFornecedor) REFERENCES Fornecedor(id),
    FOREIGN KEY (idProduto) REFERENCES Produto(id)
);