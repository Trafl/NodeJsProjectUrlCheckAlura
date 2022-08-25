import fetch from "node-fetch";

function manejaErros(erro){
  throw new Error(erro.message);
}

async function checaStatus(arrayURLs){
    try{
    const arrayStatus = await Promise
    .all(arrayURLs
      .map(async url =>{
      const res = await fetch(url)
      return `${res.status} - ${res.statusText}`;
    }))
    return arrayStatus
  }
catch(error){
  manejaErros(error)
}
}  
function geraArraysdeUrl(arrayLinks){
  return arrayLinks
  .map(ObjetoLink => Object
    .values(ObjetoLink).join());
}

async function validaURLs(arrayLinks){
  const links =  geraArraysdeUrl(arrayLinks);
  const statusLinks = await checaStatus(links)
  
  const resultados = arrayLinks.map((objeto, indice)=>({...objeto, status: statusLinks[indice]
  }))

return resultados
}

export {validaURLs}