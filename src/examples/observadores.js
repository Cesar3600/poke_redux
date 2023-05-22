

























/* 
class Subject{
  constructor(){
    this.observadores = []
    this.estado = ''
  }

  agregarObservador(observador){
    this.observadores.push(observador)
  }

  eliminarObservador(observador){
    const index = this.observadores.indexOf(observador)
    if(index !== -1){
      this.observadores.splice(pos,1)
    }
  }

  cambiarEstado(nuevoEstado){
    this.estado = nuevoEstado
    this.notificarObservadores()
  } 

  notificarObservadores(){
    this.observadores.forEach(observador => observador.actualizar(this.estado))
  }

}

class Observador{
  actualizar(estado){
    console.log(`el estado se ah actualizado a : ${estado}`)    
  }
}

const sub = new  Subject()

const observador1 = new Observador()
const observador2 = new Observador()



sub.agregarObservador(observador1)
sub.agregarObservador(observador2)

sub.cambiarEstado("he cambiaod de estado") */
