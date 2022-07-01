<template>
  <header>
    <div class="menu-esquerdo">
      <span> <RouterLink to="/">Início</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/categorias">Categoria</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/editoras">Editora</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/autores">Autor</RouterLink></span>
      <span>|</span>
      <span> <RouterLink to="/livros"> Livro</RouterLink></span>
      <span>|</span>
    </div>
    <div class="menu-direito">
      <span>Sair</span>
    </div>
  </header>
</template>

<style>
header span {
  padding: 0 20px;
}

header {
  height: 10%;
  background-color: rgb(221, 92, 103);
  color: #9bfae2;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding-left: 20px;
  justify-content: space-between;
}
</style>
