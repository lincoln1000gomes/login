import {Login} from "./login.js";
import { Cxmsg } from "./cxmsg.js";
const config={
    cor:"00609C",
    img:"df.png"
}
const callback_ok=()=>{
    
}

const callback_not=()=>{
    const config={
        textos:null ,
        comando_sn:()=>{console.log("deu certo")},
        cor:"#800" ,
        tipo: "ok"
    }
    Cxmsg.mostrar(config,"Erro","Login Não Efetuado! Usuário ou Senha incorretos");
}

Login.login(callback_ok,callback_not,config);