from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Para permitir requisições do frontend
    allow_methods=["*"],
    allow_headers=["*"],
)

usuarios_db = []  # Lista para armazenar usuários em memória

class Usuario(BaseModel):
    nome: str
    email: str

@app.post("/usuarios")
def adicionar_usuario(usuario: Usuario):
    usuarios_db.append(usuario)
    return {"mensagem": "Usuário cadastrado com sucesso!", "usuario": usuario}

@app.get("/usuarios")
def listar_usuarios():
    return usuarios_db