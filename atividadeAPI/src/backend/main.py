from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo atualizado: nome + destino
class Usuario(BaseModel):
    nome: str
    destino: str  # "name", "username", "city"

# Banco de dados separado por destino
usuarios_db = {
    "name": [],
    "username": [],
    "city": []
}

@app.post("/usuarios")
def criar_usuario(usuario: Usuario):
    destino = usuario.destino.lower()

    if destino not in usuarios_db:
        return {"erro": f"Tabela '{destino}' inválida. Use: name, username ou city"}

    usuarios_db[destino].append(usuario.nome)
    return {
        "mensagem": f"Nome '{usuario.nome}' adicionado na tabela '{destino}' com sucesso!",
        "dados": usuario
    }

@app.get("/usuarios")
def listar_usuarios():
    return usuarios_db
