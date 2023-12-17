const app = require('./src/app')
const PORT = 3001; 
const {sequelize} = require('./src/db')

app.listen(PORT, () => {
  sequelize.sync({ force: false })
  console.log(`Servidor corriendo en localhost:${PORT}`);
});
