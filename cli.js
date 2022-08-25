#!/usr/bin/env node
import chalk from "chalk";
import { pegaArquivos } from "./main.js";
import { validaURLs } from "./httpvalidacao.js";

const caminho = process.argv;

async function processaTexto (caminhoDeArquivo){
  const resultado = await pegaArquivos(caminhoDeArquivo[2])
  if(caminho[3] === 'validar'){
    console.log(chalk.yellow('Links validados'), await validaURLs(resultado))
  }else {
    console.log(chalk.yellow('lista de links'), resultado)
  }
  
}

processaTexto(caminho)