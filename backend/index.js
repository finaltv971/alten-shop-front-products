const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();

app.use(bodyParser.json());


const sequelize = new Sequelize('base_produit_alten', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});


const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  code: {
    type: DataTypes.STRING,
    allowNull: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  inventoryStatus: {
    type: DataTypes.ENUM('INSTOCK', 'OUTOFSTOCK'),
    allowNull: true
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true
  }
});


sequelize.sync()
  .then(() => {
    console.log('La base de données est prête');
  })
  .catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });


app.get('/produits', async (req, res) => {
  try {
    const produits = await Product.findAll();
    res.json(produits);
  } catch (err) {
    console.error('Erreur lors de la récupération des produits :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});


app.put('/produit', async (req, res) => {
  const { produit } = req.body;
  try {
    const nouveauProduit = await Product.create({ nom, prix });
    res.status(201).json(nouveauProduit);
  } catch (err) {
    console.error('Erreur lors de la création du produit :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});


app.get('/produits/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const produit = await Product.findByPk(id);
    if (!produit) {
      res.status(404).json({ message: 'Produit non trouvé' });
    } else {
      res.json(produit);
    }
  } catch (err) {
    console.error('Erreur lors de la récupération du produit :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});


app.patch('/produits/:id', async (req, res) => {
  const id = req.params.id;
  const { produit } = req.body;
  try {
    const produit = await Product.findByPk(produit.id);
    if (!produit) {
      res.status(404).json({ message: 'Produit non trouvé' });
    } else {
      await produit.update({ produit });
      res.json({ message: 'Produit mis à jour avec succès' });
    }
  } catch (err) {
    console.error('Erreur lors de la mise à jour du produit :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});


app.delete('/produits/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const produit = await Product.findByPk(id);
    if (!produit) {
      res.status(404).json({ message: 'Produit non trouvé' });
    } else {
      await produit.destroy();
      res.json({ message: 'Produit supprimé avec succès' });
    }
  } catch (err) {
    console.error('Erreur lors de la suppression du produit :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});


app.listen(3232);
