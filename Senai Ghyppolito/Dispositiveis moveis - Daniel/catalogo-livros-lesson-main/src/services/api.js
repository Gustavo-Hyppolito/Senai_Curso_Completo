// No emulador Android, 10.0.2.2 aponta para o localhost da maquina host.
const BASE_URL = "http://10.0.2.2:3000";

export async function buscarLivros() {
  try {
    const response = await fetch(`${BASE_URL}/Livros`);
    if (!response.ok) {
      throw new Error(`Erro ${response.status}: falha ao buscar livros`);
    }

    return await response.json();
  } catch (e) { 
    console.error("buscarLivros", e.message);
    throw e;
  }
}

export async function buscarLivroPorId(id) {
  try {
    const response = await fetch(`${BASE_URL}/Livros/${id}`);
    if (!response.ok) {
      throw new Error(`Erro ${response.status}: falha ao buscar livro`);
    }

    return await response.json();
  } catch (e) {
    console.error("buscarLivroPorId", e.message);
    throw e;
  }
}

export async function adicionarFavorito(livroId, observacao = "") {
  try {
    const response = await fetch(`${BASE_URL}/favoritos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ livroId, observacao }),
    });

    if (!response.ok) {
      const corpo = await response.json().catch(() => ({}));
      const error = new Error(corpo.erro ?? `Erro ${response.status}: falha ao adicionar aos favoritos`);
      error.status = response.status;
      throw error;
    }

    return await response.json();
  } catch (e) {
    console.error("adicionarFavorito", e.message);
    throw e;
  }
}

export async function listarFavoritos() {
  try {
    const response = await fetch(`${BASE_URL}/favoritos`);
    if (!response.ok) {
      throw new Error(`Erro ${response.status}: falha ao listar favoritos`);
    }

    return await response.json();
  } catch (e) {
    console.error("listarFavoritos:", e.message);
    throw e;
  }
}

export async function editarFavorito(id, observacao) {
  try {
    const response = await fetch(`${BASE_URL}/favoritos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ observacao }),
    });

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: falha ao editar favorito`);
    }

    return await response.json();
  } catch (e) {
    console.error("editarFavorito:", e.message);
    throw e;
  }
}

export async function removerFavorito(id) {
  try {
    const response = await fetch(`${BASE_URL}/favoritos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: falha ao remover favorito`);
    }

    return true;
  } catch (e) {
    console.error("removerFavorito", e.message);
    throw e;
  }
}