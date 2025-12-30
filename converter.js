// Script Node.js para converter base de dados.txt para dados.json
const fs = require('fs');

// Ler o ficheiro de texto
const rawData = fs.readFileSync('base de dados.txt', 'utf-8');
const lines = rawData.split('\n').filter(line => line.trim());

const vehicles = [];

lines.forEach((line, index) => {
    // Dividir por tabs
    const cols = line.split('\t').map(c => c.trim());
    
    // Ignorar linhas de cabeçalho ("Car model")
    if (cols.length > 1 && cols[1] === 'Car model') {
        return;
    }
    
    // Processar linha de dados (deve ter pelo menos 7 colunas)
    if (cols.length >= 7) {
        const marca = cols[0];
        const modelo = cols[1];
        const ano = cols[2];
        const furacao = cols[3];
        const offset = cols[4];
        const centro = cols[5];
        const parafuso = cols[6];
        
        // Adicionar veículo ao array (validar campos obrigatórios)
        if (marca && modelo && ano && furacao && centro && 
            modelo !== 'Car model' && ano !== 'Year') {
            vehicles.push({
                marca: marca,
                modelo: modelo,
                ano: ano,
                furacao: furacao,
                offset: offset || 'N/A',
                centro: centro,
                parafuso: parafuso || 'N/A'
            });
        }
    }
});

// Ordenar por marca alfabeticamente
vehicles.sort((a, b) => a.marca.localeCompare(b.marca, 'pt'));

// Salvar como JSON
fs.writeFileSync('dados.json', JSON.stringify(vehicles, null, 2), 'utf-8');

console.log(`✅ Conversão completa! ${vehicles.length} veículos convertidos.`);
console.log(`📄 Ficheiro criado: dados.json`);

// Mostrar estatísticas
const marcas = new Set(vehicles.map(v => v.marca));
console.log(`🚗 Total de marcas: ${marcas.size}`);

// Mostrar primeiros 3 registos como exemplo
console.log('\nExemplo de registos:');
vehicles.slice(0, 3).forEach((v, i) => {
    console.log(`${i+1}. ${v.marca} - ${v.modelo} (${v.ano})`);
});
