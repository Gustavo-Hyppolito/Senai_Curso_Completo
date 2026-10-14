import { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Componente responsável por renderizar UM item da lista de tarefas.
export default function TarefaItem({
  tarefa,
  aoAlternarConcluida,
  aoExcluir,
  aoEditar,
}) {
  const [editando, setEditando] = useState(false);
  const [novoTexto, setNovoTexto] = useState(tarefa.texto);

  const salvarEdicao = () => {
    if (novoTexto.trim() === "") {
      return;
    }

    aoEditar(tarefa.id, novoTexto);
    setEditando(false);
  };

  return (
    <View style={styles.item}>
      {editando ? (
        <TextInput
          style={styles.inputEditar}
          value={novoTexto}
          onChangeText={setNovoTexto}
          autoFocus
        />
      ) : (
        <TouchableOpacity
          style={styles.textoContainer}
          onPress={() => aoAlternarConcluida(tarefa.id)}
        >
          <Text
            style={[
              styles.texto,
              tarefa.concluida && styles.textoConcluido,
            ]}
          >
            {tarefa.texto}
          </Text>
        </TouchableOpacity>
      )}

      {editando ? (
        <TouchableOpacity
          style={styles.botaoSalvar}
          onPress={salvarEdicao}
        >
          <Text style={styles.textoBotao}>Salvar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.botaoEditar}
          onPress={() => setEditando(true)}
        >
          <Text style={styles.textoBotao}>Editar</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.botaoExcluir}
        onPress={() => aoExcluir(tarefa.id)}
      >
        <Text style={styles.textoBotaoExcluir}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 1,
    },

    elevation: 2,
  },

  textoContainer: {
    flex: 1,
    marginRight: 8,
  },

  texto: {
    fontSize: 16,
    color: "#222",
  },

  textoConcluido: {
    textDecorationLine: "line-through",
    color: "#999",
  },

  inputEditar: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginRight: 8,
  },

  botaoEditar: {
    backgroundColor: "#f39c12",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginRight: 6,
  },

  botaoSalvar: {
    backgroundColor: "#27ae60",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginRight: 6,
  },

  botaoExcluir: {
    backgroundColor: "#e74c3c",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },

  textoBotaoExcluir: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});