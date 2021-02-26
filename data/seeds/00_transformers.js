exports.seed = function (knex) {
  return knex('transformers').then(function () {
    return knex('transformers').insert([
      { transformer_name: 'Optimus' },
      { transformer_name: 'Bumblebee' },
      { transformer_name: 'Megatron' },
    ]);
  });
};
