const test = async (req, res) => {
  await res.json({
    msg: "Hello World!",
  });
};

module.exports = { test };
