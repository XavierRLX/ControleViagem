const sql = require('mssql');

// Configuração da conexão com o banco de dados
const config = {
    server: 'ncpv-sqldev',
    database: 'ControleViagem',
    options: {
        trustedConnection: true // Use Windows authentication
    }
};

// Função para conectar e fazer uma consulta simples
async function connectAndQuery() {
    try {
        // Conectar ao banco de dados
        await sql.connect(config);

        // Executar uma consulta
        const result = await sql.query('SELECT * FROM viagem');

        // Exibir o resultado
        console.dir(result);

    } catch (err) {
        console.error('Erro ao conectar ou consultar o banco de dados:', err);
    } finally {
        // Fechar a conexão
        sql.close();
    }
}

// Chamar a função para conectar e consultar
connectAndQuery();
