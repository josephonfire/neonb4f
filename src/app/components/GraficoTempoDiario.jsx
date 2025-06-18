import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import history from "../data/history.json"

// função do grafico para processar os dados do dia 
function processarDados(dados) {
  // criar objeto vazio para guardar a soma ms por dia
  const ms = {};

  dados.forEach(item => {
    // pegar só a data do dia
    const data = item.ts.split("T")[0]

    //se ainda nao existir o dia no obj, vira 0 só pra somar
    if (!ms[data]) {
      ms[data] = 0;
    }

    // soma dos ms 
    ms[data] += item.ms_played;
  });

  const processados = Object.entries(ms).map(([data, ms]) => {
    // divide ms por 60000 ja que cada 1000 é 1 segundo
    const minutos = Math.floor(ms / 60000);
    return { data, minutos }
  });

  // sort no array do menor para maior usando date para criar as "variaveis"
  processados.sort((a, b) => new Date(a.data) - new Date(b.data));

  return processados;
}

export default function GraficoTempoDiario() {
    // processar os dados da funcao no page do dashboard
    const dadosProcessados = processarDados(history);

    return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>Tempo diário que ouviu música: (minutos)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={dadosProcessados}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="data" minTickGap={30}/>
          <YAxis />
          <Tooltip wrapperStyle={{ width: "50%", color: "#521f90" }} />
          <Area type="monotone" dataKey="minutos" stroke="#fff" fill="#fff" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}