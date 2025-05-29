import { useState } from 'react'
import { nomes } from './dados.js'

export default function DropdownNomes() {
  const [nomeSelecionado, setNomeSelecionado] = useState("")

  return (
    <div style={{ margin: '20px' }}>
      <label htmlFor="nomes">Selecione um nome:</label>
      <select
        id="nomes"
        onChange={(e) => setNomeSelecionado(e.target.value)}
        value={nomeSelecionado}
        style={{ marginLeft: '10px', fontSize: '16px' }}
      >
        <option value="">----</option>
        {nomes.map((nome, index) => (
          <option key={index} value={nome}>
            {nome}
          </option>
        ))}
      </select>

      {nomeSelecionado && (
        <p style={{ fontSize: '24px', marginTop: '20px' }}>
          Você selecionou: <strong>{nomeSelecionado}</strong>
        </p>
      )}
    </div>
  )
}