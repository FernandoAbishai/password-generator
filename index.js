const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars) {
      const characters = [];
      if (includeUppercase) characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
      if (includeLowercase) characters.push(...'abcdefghijklmnopqrstuvwxyz'.split(''));
      if (includeNumbers) characters.push(...'0123456789'.split(''));
      if (includeSpecialChars) characters.push(...'!@#$%^&*()_+-=[]{}|;:,.<>?'.split(''));

      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }

      return password;
    }

    async function main() {
      rl.question('Enter the desired password length: ', async (length) => {
        const includeUppercase = await askYesNoQuestion('Include uppercase letters? ');
        const includeLowercase = await askYesNoQuestion('Include lowercase letters? ');
        const includeNumbers = await askYesNoQuestion('Include numbers? ');
        const includeSpecialChars = await askYesNoQuestion('Include special characters? ');

        if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
          console.log('Please select at least one character type.');
          return;
        }

        const password = generatePassword(parseInt(length), includeUppercase, includeLowercase, includeNumbers, includeSpecialChars);
        console.log(`Generated Password: ${password}`);
        rl.close();
      });
    }

    function askYesNoQuestion(question) {
      return new Promise((resolve) => {
        rl.question(`${question} (y/n): `, (answer) => {
          resolve(answer.toLowerCase() === 'y');
        });
      });
    }

    main();
