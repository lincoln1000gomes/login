class Login{
    static logado=false;
    static matlogado=null;
    static nomelogado=null;
    static acessologado=null;
    static estilocss=null;
    static endpoint="https://c596c4bc-b4b7-446f-9999-2bd496427208-00-13oigouqy1n8q.riker.replit.dev/"
    //https://c596c4bc-b4b7-446f-9999-2bd496427208-00-13oigouqy1n8q.riker.replit.dev/?matricula=123&senha=321
    
    static login=(mat,pass)=>{
        this.endpoint+=`?matricula=${mat}&senha=${pass}`
        this.estilocss=
        ".fundo_login{display:flex;justify-content:center;align-items:center;width:100%;height:100vh;position:absolute;top:0px;left:0px;background-color: rgba(0, 0, 0, 0.75);box-sizing:border-box;}"+
        ".base_login{display:flex;justify-content:center;align-items:stretch;width:50%;box-sizing:inherit;}"+
        ".elementos_login{display:flex;justify-content:center;align-items:flex-start;flex-direction:column;width:50%;background-color:#eee;padding:10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}"+
        ".logo_login{display: flex;justify-content: center;align-items:center;width: 50%;background-color: #bbb;padding: 10px;border-radius: 0px 10px 10px 0px;box-sizing: inherit;}"+
        ".logo_login img{width: 90%;box-sizing: inherit;}"+
        ".campo_login{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction:column;box-sizing:inherit;}"+
        ".campo_login label{font-size:18px;}"+
        ".campo_login input{font-size:18px;padding:5px;background-color:#fff;border-radius:5px;margin-bottom:10px;}"+
        ".botoes_login{display:flex;justify-content:space-around;align-items:center;width:100%;box-sizing:inherit;margin-bottom:1cqw;}"+
        ".botoes_login button{cursor:pointer;background-color:#048;color:#fff;border-radius:5px;padding:10px;width:100px;box-sizing:inherit;}"
        const styleestilo=document.createElement("style");
        styleestilo.setAttribute("id","id_estiloidlogin")
        styleestilo.setAttribute("rel","stylesheet");
        styleestilo.setAttribute("type","text/css");
        styleestilo.innerHTML=this.estilocss;
        document.head.appendChild(styleestilo)
        // fetch(this.endpoint)
        // .then(res=>res.json())
        // .then(res=>{
        //     if(res){
        //         this.logado=true
        //         this.matlogado=mat
        //         this.nomelogado=res.nome
        //         this.acessologado=res.acesso
        //         console.log(this.nomelogado)
        //     }else{
        //         console.log("usuário não encontrado")
        //     }
        // })
    }
}

export{Login}