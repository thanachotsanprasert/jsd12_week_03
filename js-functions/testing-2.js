import readline from "readline";

function assignTiers(cases) {
  const sorted = [...cases].sort((a, b) => b.value - a.value);

  return sorted;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isValidNumber(value) {
  return !isNaN(value) && value >= 0 && value <= 100;
}

rl.question("Please assign number value to Ticket 1: ", function (input1) {
  const val1 = parseFloat(input1);

  rl.question("Please assign number value to Ticket 2: ", function (input2) {
    const val2 = parseFloat(input2);

    rl.question("Please assign number value to Ticket 3: ", function (input3) {
      const val3 = parseFloat(input3);

      rl.question("Please assign number value to Ticket 4: ", function (input4) {
        const val4 = parseFloat(input4);

        rl.question("Please assign number value to Ticket 5: ", function (input5) {
          const val5 = parseFloat(input5);

          if (
            !isValidNumber(val1) ||
            !isValidNumber(val2) ||
            !isValidNumber(val3) ||
            !isValidNumber(val4) ||
            !isValidNumber(val5)
          ) {
            console.log("Invalid input! Please enter numbers between 0 and 100.");
            rl.close();
            return;
          }

          const cases = [
            { ticket: 1, value: val1 },
            { ticket: 2, value: val2 },
            { ticket: 3, value: val3 },
            { ticket: 4, value: val4 },
            { ticket: 5, value: val5 },
          ];

          const ranked = assignTiers(cases);

          console.log("\nCase you need to do first");

          for (let i = 0; i < ranked.length; i++) {
            console.log(
              `Case Tier ${i + 1}: ${ranked[i].value} / Ticket ${ranked[i].ticket}`
            );
          }

          rl.close();
        });
      });
    });
  });
});