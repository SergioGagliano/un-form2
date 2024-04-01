export function UncontrolledLogin(){
    
    function handleLongin(event){
        event.preventDefault()

        const formData = new FormData(event.target)
        const username = formData.get('username')
        const password = formData.get('password')
        const remember = formData.get('remember')

        const data={
            username,
            password,
            remember,
        }

        console.log(data)
    }

    return(
      <>
        <form onSubmit={handleLongin}> 
        
         <h1>FORM</h1>

        <span>Username</span>
        <input type="text" name="username" />  
       
        <span>Password</span>
        <input type="password"name="password"/>
         
        <span>Ricorda i miei dati</span> 
        <input type="checkbox" name="remember"/>  
         
         <button type="submit">invia</button>
        </form>
      </>
    )
}