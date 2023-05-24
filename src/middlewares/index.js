

// obtener un console.log con la informacion de esa accion cuando se dispare

// este tipo de funcion es una courier funcion o sea una funcion que retorna una funcion


// La funcion logger recibe el store que es el store de la aplicacion

// next es la funcion que llamaremos cuando el middlewre halla terminado su trabajo

// y la funcion next manda el action al reducer


//el action es la informacion de lo que esta pasando
export const logger = (store) => (next) => (action) => {
  console.log(action)
  next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {

  const featured = [{ name: "EddieVedder" }, ...actionInfo.action?.payload || []];

  const updateActionInfo = { ...actionInfo, action: { ...actionInfo.action, payload: featured } }

  next(updateActionInfo)

}

