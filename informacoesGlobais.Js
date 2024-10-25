const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformacoesglobais(){
    const res =await fetchu(url);
    const dados=res.json()
    console.log(dados)
}