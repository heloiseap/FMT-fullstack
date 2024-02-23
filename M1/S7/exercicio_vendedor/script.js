class Vendedor {

    #nome
    #sobrenome
    #valorVendidoNoMes
    #salarioBase

    constructor(nome,sobrenome,valorVendidoNoMes,salarioBase) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.valorVendidoNoMes = valorVendidoNoMes
        this.salarioBase = salarioBase
    }

    get nome() {
        return this.nome
    }
    set nome(nome) {
        this.nome = nome
    }

    get sobrenome() {
        return this.sobrenome
    }
    set sobrenome(sobrenome) {
        this.sobrenome = sobrenome
    }

    get valorVendidoNoMes() {
        return this.valorVendidoNoMes
    }
    set valorVendidoNoMes(valorVendidoNoMes) {
        this.valorVendidoNoMes = valorVendidoNoMes
    }
    get salarioBase() {
        return this.salarioBase
    }
    set salarioBase(salarioBase) {
        this.salarioBase = salarioBase
    }

}

class VendedorComissionado extends Vendedor {

    #taxaComissao

    constructor(nome,sobrenome,valorVendidoNoMes,salarioBase,taxaComissao) {
        super(nome,sobrenome,valorVendidoNoMes,salarioBase)
        this.taxaComissao = taxaComissao
    }

    get taxaComissao() {
        return this.taxaComissao
        }

    set taxaComissao(taxaComissao) {
        if (taxaComissao >=0 && taxaComissao <=1){
            this.taxaComissao = taxaComissao
        }
    }
    getSalario() {
        return super.salarioBase + (this.taxaComissao * this.valorVendidoNoMes)  
    }

}