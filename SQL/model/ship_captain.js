let sequelizeInstance = require("./../connection");
const sequelize = require("sequelize");
const Ship = sequelizeInstance.define('ship', {
    name: sequelize.TEXT,
    crewCapacity: sequelize.INTEGER,
    amountOfSails: sequelize.INTEGER
  }, { timestamps: false });

const Captain = sequelizeInstance.define('captain', {
name: sequelize.TEXT,
skillLevel: {
    type: sequelize.INTEGER,
    validate: { min: 1, max: 10 }
}
}, { timestamps: false });
  Captain.hasOne(Ship);
  Ship.belongsTo(Captain);  

async function LoadModel(){
    await sequelizeInstance.sync(); 
const awesomeCaptain = await Captain.findOne({
    where: {
        name: "Jack Sparrow"
    }
    });
    // Do stuff with the fetched captain
    console.log('Name:', awesomeCaptain.name);
    console.log('Skill Level:', awesomeCaptain.skillLevel);
    // Now we want information about his ship!
    const hisShip = await awesomeCaptain.getShip();
    // Do stuff with the ship
    console.log('Ship Name:', hisShip.name);
    console.log('Amount of Sails:', hisShip.amountOfSails);
}

  LoadModel();