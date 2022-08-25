import chalk from 'chalk';
import fs  from 'fs';

  function extrairLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !==null ){
      arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados.length === 0 ? 'Não a links.' : arrayResultados;
  }


  const trataErro = (erro)=>{
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'))
}

  async function pegaArquivos(caminhoDoArquivo){
  
  const enconding ='utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)    
     return extrairLinks(texto)
  } catch(erro){
    trataErro(erro)
  }
}


 /*  const pegaArquivos=(caminhoDoArquivo)=>{
  const enconding = 'utf-8';
  fs.promises
  .readFile(caminhoDoArquivo, enconding)
  .then((texto) => chalk.green(console.log(texto)))
  .catch((erro) => trataErro(erro)) 
 } */



 /* const pegaArquivos = (caminhoDoArquivo)=>{
  const enconding = 'utf-8';
  fs.readFile(caminhoDoArquivo, enconding , (erro , texto) =>{
if(erro){
  trataErro(erro)
}
console.log(chalk.green(texto));
  })
} */


//pegaArquivos('./arquivos/texto1.md');




console.log(chalk.blue('hello world'));


export {pegaArquivos}