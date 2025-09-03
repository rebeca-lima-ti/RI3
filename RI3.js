class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd;
        this.numero = numero;
    }
}

class Endereco{
    constructor(estado, cidade, rua, numero){    
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
}

class Cliente{
    #cpf;
    constructor(nome, cpf, endereco){
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf;
    }

    get getNomeUp(){
        return this.nome.toUpperCase();
    }
    get getNomeLower(){
        return this.nome.toLowerCase();
    }

    get getCpf(){
        return this.#cpf;
    }

    get getTelefones() {
        let lista = [];
        for (let tel of this.telefones){
            lista.push(tel.ddd.toString() + tel.numero.toString());
        }
        return lista;
    }

    addTelefone = function(telefone){
        this.telefones.add(telefone);
    }
}

class Empresa{
    #cnpj;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.#cnpj = cnpj;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get getNomeSocialUp(){
        return this.nomeSocial.toUpperCase();
    }
    get getNomeSocialLower(){
        return this.nomeSocial.toLowerCase();
    }
    
    get getNomeFantasiaUp(){
        return this.nomeFantasia.toUpperCase();
    }
    get getNomeFantasiaLower(){
        return this.nomeFantasia.toLowerCase();
    }

    get getCnpj(){
        return this.#cnpj;
    }

    get getClientes() {
        let lista = [];
        for (let cli of this.clientes) {
            lista.push(cli.nome);
        }
        return lista;
    }

    get getTelefones() {
        let lista = [];
        for (let tel of this.telefones){
            lista.push(tel.ddd.toString() + tel.numero.toString());
        }
        return lista;
    }

    addCliente = function(cliente){
        this.clientes.add(cliente);
    }

    addTelefone = function(telefone){
        this.telefones.add(telefone);
    }

    detalhes(){
        let desc = `Razão Social: ${this.razaoSocial}
Nome Fantasia: ${this.nomeFantasia}
-----------------------------------
`;
        for (let cli of this.clientes){
            let clidesc = `Nome: ${cli.nome}
Estado: ${cli.endereco.estado}, Cidade: ${cli.endereco.cidade}, Rua: ${cli.endereco.rua}, Nº: ${cli.endereco.numero}
`;
            for (let tel of cli.telefones){
                clidesc += `ddd: ${tel.ddd}, Numero: ${tel.numero}
`;
            }
            clidesc += '\n';

            desc += clidesc;
            clidesc = '';
        }
        

        return desc
    }
}

let end1 = new Endereco('SP', 'Taubaté', 'Rua dos Ipês', 112);
let end2 = new Endereco('SP', 'São José dos Campos', 'Rua das Palmeiras', 302);
let end3 = new Endereco('SP', 'São José dos Campos', 'Rua 11 de Setembro', 2011);
let end4 = new Endereco('SP', 'Caçapava', 'Av. Central', 403);
let end5 = new Endereco('SP', 'São José dos Campos', 'Av. Juscelino', 85);
let end6 = new Endereco('RJ', 'Rio de Janeiro', 'Rua das Orquídeas', 870);

let tel1 = new Telefone(12, 999999999);
let tel2 = new Telefone(12, 888888888);
let tel3 = new Telefone(12, 777777777);
let tel4 = new Telefone(12, 666666666);

let cli1 = new Cliente('Enzo Gabriel Code', '999.999.999-99', end1);
let cli2 = new Cliente('Rafael Sette', '888.888.888-88', end2);
let cli3 = new Cliente('João Vitor Moura', '777.777.777-77', end3);
let cli4 = new Cliente('Ana Julia Rubim', '666.666.666-66', end4);
let cli5 = new Cliente('Gabriel Lázaro', '555.555.555-55', end5);

cli1.addTelefone(tel1);
cli1.addTelefone(tel2);

cli2.addTelefone(tel3);
cli2.addTelefone(tel4);

cli3.addTelefone(tel2);
cli3.addTelefone(tel4);

cli4.addTelefone(tel1);
cli4.addTelefone(tel3);

cli5.addTelefone(tel2);
cli5.addTelefone(tel4);

let emp1 = new Empresa('Chronos LTDA', 'Chronos', '98.765.432/0000-01', end6);

emp1.addCliente(cli1);
emp1.addCliente(cli2);
emp1.addCliente(cli3);
emp1.addCliente(cli4);
emp1.addCliente(cli5);

emp1.addTelefone(tel3);
emp1.addTelefone(tel2);

console.log(emp1.detalhes())