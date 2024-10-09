class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    
    atacar() {
        switch(this.tipo){
            case 'mago':
                console.log(`O ${this.tipo} atacou usando magia`)
                break
            case 'guerreiro':
                console.log(`O ${this.tipo} atacou usando espada`)
                break
            case 'monge':
                console.log(`O ${this.tipo} atacou usando artes marciais`)
                break
            case 'ninja':
                console.log(`O ${this.tipo} atacou usando Shuriken`)
                break
            default:
                console.log(`O tipo ${this.tipo} não é válido!`)
                break
        }
    
    }
}

const heroiUm = new Heroi('Alberto', 27, 'mago')
const heroiDois = new Heroi('Thalles', 40, 'monge')
const heroiTres = new Heroi('Victor', 32, 'guerreiro')
const heroiQuatro = new Heroi('Silvio', 20, 'ninja')

heroiUm.atacar()
heroiDois.atacar()
heroiTres.atacar()
heroiQuatro.atacar()