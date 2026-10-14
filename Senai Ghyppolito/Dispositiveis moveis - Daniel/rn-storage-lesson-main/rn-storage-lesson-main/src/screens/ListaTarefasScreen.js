import { useState } from "react";

import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import TarefaItem from "../components/TarefaItem";

export default function ListaTarefasScreen() {
  const [textoInput, setTextoInput] = useState("");
  const [tarefas, setTarefas] = useState([]);

  // Adicionar tarefa
  const adicionarTarefa = () => {
    if (textoInput.trim() === "") {
      return;
    }

    const novaTarefa = {
      id: Date.now().toString(),
      texto: textoInput.trim(),
      concluida: false,
    };

    setTarefas((tarefasAtuais) => [...tarefasAtuais, novaTarefa]);
    setTextoInput("");
  };

  // Alternar tarefa concluída/pendente
  const alternarConcluida = (id) => {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  };

  // Excluir uma tarefa
  const excluirTarefa = (id) => {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.filter((tarefa) => tarefa.id !== id)
    );
  };

  // Limpar todas as tarefas
  const limparTodas = () => {
    setTarefas([]);
  };

  // Editar tarefa
  const editarTarefa = (id, novoTexto) => {
    if (novoTexto.trim() === "") {
      return;
    }

    setTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, texto: novoTexto.trim() }
          : tarefa
      )
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.titulo}>Lista de Tarefas</Text>

      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa..."
          value={textoInput}
          onChangeText={setTextoInput}
          onSubmitEditing={adicionarTarefa}
          returnKeyType="done"
        />

        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={adicionarTarefa}
        >
          <Text style={styles.textoBotaoAdicionar}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.botaoLimpar}
        onPress={limparTodas}
      >
        <Text style={styles.textoBotaoLimpar}>
          Limpar todas as tarefas
        </Text>
      </TouchableOpacity>

      <FlatList
        data={tarefas}
        keyExtractor={(tarefa) => tarefa.id}
        renderItem={({ item }) => (
          <TarefaItem
            tarefa={item}
            aoAlternarConcluida={alternarConcluida}
            aoExcluir={excluirTarefa}
            aoEditar={editarTarefa}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>
            Nenhuma tarefa cadastrada ainda.
          </Text>
        }
        contentContainerStyle={styles.listaConteudo}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: 60,
    paddingHorizontal: 16,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },

  formulario: {
    flexDirection: "row",
    marginBottom: 10,
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },

  botaoAdicionar: {
    backgroundColor: "#2e86de",
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
  },

  textoBotaoAdicionar: {
    color: "#fff",
    fontWeight: "bold",
  },

  botaoLimpar: {
    backgroundColor: "#e74c3c",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 16,
  },

  textoBotaoLimpar: {
    color: "#fff",
    fontWeight: "bold",
  },

  listaConteudo: {
    paddingBottom: 20,
  },

  listaVazia: {
    textAlign: "center",
    color: "#888",
    marginTop: 24,
  },
});