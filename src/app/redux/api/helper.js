export const transformCoinsResponse = data => {
  return data.reduce((obj, coin) => {
    obj[coin.nombre] = {
      id: coin._id,
      name: coin.nombre,
      icon: coin.icono,
      price: coin.precio,
      score: coin.score,
      profit: coin.profit,
      ranking: coin.ranking,
      graphic: coin.grafico
    };
    return obj;
  }, {});
};
