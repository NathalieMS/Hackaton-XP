class SomaValores {
  static countDebito(obj) {
      console.log(obj);
    let debit = obj.filter((conta) => {
      return conta.type === "debit";
    });

    let resultSoma = 0
    debit.map( element => resultSoma += element.value) 
    return Number(resultSoma.toFixed(2))
  }

  static countCredito(obj) {
    let credit = obj.filter((conta) => {
      return conta.type === "credit";
    });

    let resultSoma = 0
    credit.map( element => resultSoma += element.value) 
    return Number(resultSoma.toFixed(2))

  }

  constructor(dado) {
    this.totalDebito = SomaValores.countDebito(dado);
    this.totalCredito = SomaValores.countCredito(dado);
  }
}

module.exports = SomaValores

