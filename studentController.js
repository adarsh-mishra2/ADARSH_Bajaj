exports.getInfo = async (req, res) => {
  try {
    res.json({
      operation_code: 1,
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "error",
      message: "Some error occurred in app.Try again later.",
    });
  }
};
exports.processInfo = async (req, res) => {
  try {
    const { data } = req.body;

    let numbers = [];
    let alphabets = [];
    let highest_alphabet = null;

    if (Array.isArray(data)) {
      data.forEach((item) => {
        if (!isNaN(item)) {
          // Check if the item is a number
          numbers.push(item);
        } else if (item.match(/[A-Za-z]/)) {
          // Check if the item is an alphabet (case insensitive)
          alphabets.push(item);

          // Convert to lowercase for case-insensitive comparison
          const lowercaseItem = item.toLowerCase();

          // Check if it's the highest alphabet so far (case-insensitive)
          if (
            !highest_alphabet ||
            lowercaseItem > highest_alphabet.toLowerCase()
          ) {
            highest_alphabet = item;
          }
        }
      });
    } else {
      return res.status(500).json({
        is_success: false,
        message: "Data should be an array",
      });
    }

    return res.status(200).json({
      is_success: true,
      user_id: "Adarsh_Mishra_am1944",
      email: "am1944@srmist.edu.in",
      roll_number: "RA2011003011109",
      numbers,
      alphabets,
      highest_alphabet: [highest_alphabet],
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      is_success: false,
      message: "Some error occurred in app.Try again later.",
    });
  }
};
