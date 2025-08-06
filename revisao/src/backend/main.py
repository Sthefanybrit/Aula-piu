from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Porta do frontend Vite
    allow_methods=["*"],
    allow_headers=["*"],
)

class Tarefa(BaseModel):
    nome: str
    concluida: Optional[bool] = False

tarefas_db: List[Tarefa] = []

@app.get("/tarefas", response_model=List[Tarefa])
def listar_tarefas():
    return tarefas_db

@app.post("/tarefas", response_model=Tarefa)
def criar_tarefa(tarefa: Tarefa):
    tarefas_db.append(tarefa)
    return tarefa

@app.delete("/tarefas")
def limpar_tarefas():
    tarefas_db.clear()
    return {"message": "Todas as tarefas foram removidas com sucesso."}
