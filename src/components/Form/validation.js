

const validation = (userData) => {
  let errors = {}
    if (!/\S+@\S+\.\S+/.test(userData.email)){
        
        errors.email = 'por favor, revisa tu mail'
      }
      
  if (!userData.email){
    errors.email = 'por favor, ingrese su email'
  }

      if (userData.email.length > 35){
        errors.email = 'el email no debe superar los 35 caracteres'
      }

      if (!userData.password.match(/\d/)){
        errors.password = "tiene que tener al menos 1 numero"
        }
        
       

      if (userData.password.length < 6 || userData.password.length > 10){
        errors.password = "tiene que tener entre 6 y 10 caracteres"
       
      }

      return errors;
} 

export default validation;