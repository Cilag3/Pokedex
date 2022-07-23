//resposta
const pokemonNomeElemento = document.getElementById('nomePokemon')
const pokemonTipoElemento = document.getElementById('tipoPokemon')
//Mudança de imagem
const pokemonImagemElemento = document.getElementById('imgPokemon')
const pokemonCarregandoImagemElemento = document.querySelector('.imagem-carregando')


const pesquisar = () => {
  //bloqueia o refresh
  const busca = document.getElementById('pesquisa')
  busca.addEventListener('onclick', function (semrefresh) {
    semrefresh.preventDefault()
  })
  //captura string do input
  const nomePokemonPesquisa = document.getElementById('nome').value
  //concatena string do input com url e transforma em minúscula
  const url =
    `https://pokeapi.co/api/v2/pokemon/${nomePokemonPesquisa}`.toLowerCase()

    //Chamando função que faz o carregando aparecer
    carregando(true)

  //Requisição - fech vai buscar as infirmações no servidor
  fetch(url)
    .then(resposta => resposta.json())
    .then(function (res) {
      pokemonNomeElemento.innerHTML = maiuscula(res.name)
      pokemonTipoElemento.innerHTML = maiuscula(res.types[0].type.name)
      pokemonImagemElemento.src = res.sprites.other.home.front_default
      console.log(res.sprites.other.home.front_default)
    })
    .finally(() => carregando(false))
}

//Função para deixar a primeira letra do resultado maiúscula
function maiuscula(val) {
  return val[0].toUpperCase() + val.substr(1)
}


function carregando(verfal) { 
 if (verfal == true) {
  pokemonCarregandoImagemElemento.style.display = "flex"
  pokemonImagemElemento.style.display = "none"
 } else {
  pokemonCarregandoImagemElemento.style.display = "none"
  pokemonImagemElemento.style.display = "flex"
 }
}
