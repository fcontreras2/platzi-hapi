'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    stock: DataTypes.DOUBLE,
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};