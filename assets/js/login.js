
            let userCreds = JSON.parse(sessionStorage.getItem("user-creds"));
            let userInfo = JSON.parse(sessionStorage.getItem("user-info"));
        
            let GreetHead = document.getElementById('GreetMsg')
            let MsgHead = document.getElementById('msgmail')
            let SignoutButton = document.getElementById('SignOutbtn')
        
            
            let Signout = () => {
                sessionStorage.removeItem("user-creds");
                sessionStorage.removeItem("user-info");
                window.location.href = "./auth-sign-in.html"
            } 
        
            let checkCred = () =>{
                if(!sessionStorage.getItem("user-creds")){
                    window.location.href = "./auth-sign-in.html"
                }
                
                else{
                    MsgHead.innerText = `${userCreds.email}`
                    GreetHead.innerText = `${userInfo.firstname}  ${userInfo.lastname}!`
                }
            }
        
            window.addEventListener('load',checkCred);
            SignoutButton.addEventListener('click',Signout);