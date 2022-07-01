<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      autores: [
        {
          id: "5e0bed5b-4a01-4dbe-9500-e1a975ebb781 ",
          nome: "desc 1",
        },
        {
          id: "3ee0fd2f-962f-4334-97cf-a00e15f7e8ad ",
          nome: "desc 2",
        },
        {
          id: "bbe903e8-e0ea-458d-ad13-adcfd1b47412 ",
          nome: "desc 3",
        },
      ],
      novo_autor: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_autor !== "") {
        const novo_id = uuidv4();
        this.autores.push({
          id: novo_id,
          nome: this.novo_autor,
        });
        this.novo_autor = "";
      }
    },
    excluir(autor) {
      const indice = this.autores.indexOf(autor);
      this.autores.splice(indice, 1);
      alert(indice);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Autor</h2>
    </div>
    <div class="form-input">
      <input v-model="novo_autor" type="text" @keydown.enter="salvar" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-times">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Edição</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
            <td>
              {{ autor.id }}
            </td>
            <td>
              {{ autor.nome }}
            </td>
            <td>
              <button>Editar</button>
              <button @click="excluir(autor)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
.title {
  text-align: center;
  margin: 2rem 0;
}
.form-input {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.form-input input {
  width: 25%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.form-input button {
  padding: 0.5rem;
  width: 15%;
  border: 3px solid rgb(221, 92, 103);
  border-radius: 10px;
  background-color: rgb(221, 92, 103);
  color: white;
  font-weight: bold;
  margin-left: 1%;
}

.list-times {
  display: flex;
  justify-content: center;
}

table {
  width: 50%;
  border-collapse: collapse;
  margin: 0 auto;
  border: 2px solid black;
  font-size: 1.1rem;
  text-align: center;
}

table thead {
  background-color: rgb(221, 92, 103);
  color: white;
  font-weight: bold;
}

table tbody tr:nth-child(odd) {
  background-color: #b0feea;
}
</style>
