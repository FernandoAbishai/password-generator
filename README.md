# Password Generator

A simple and customizable password generator built using **Node.js**. This tool allows users to create secure, random passwords based on their preferences.

## Project Structure

The repository contains the following key files:

- **index.js**: The main script containing the password generation logic.
- **package.json**: Lists project dependencies and metadata.
- **package-lock.json**: Automatically generated file that locks the versions of dependencies.
- **node_modules/**: Directory containing all installed Node.js dependencies.

## Features

- **Customizable Password Length**: Choose the length of the password.
- **Character Set Options**:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special characters (@, #, $, %, etc.)
- **Secure Generation**: Ensures strong, cryptographically secure passwords.
- **User-Friendly**: Simple command-line interface (CLI).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/FernandoAbishai/password-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd password-generator
   ```

3. Install required dependencies:

   ```bash
   npm install
   ```

## Usage

### Command Line Interface (CLI)

1. Run the password generator script:

   ```bash
   node index.js
   ```

2. Follow the on-screen prompts to specify:
   - Password length
   - Whether to include uppercase letters, lowercase letters, numbers, and special characters

3. The generated password will be displayed in the terminal.

### Example

```bash
$ node index.js
Enter desired password length: 12
Include uppercase letters? (y/n): y
Include lowercase letters? (y/n): y
Include numbers? (y/n): y
Include special characters? (y/n): n

Generated Password: A1b2C3d4E5f6
```

## Configuration Options

You can modify the default settings by editing the script or by passing command-line arguments (to be implemented in future versions).

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   
   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add new feature"
   ```

4. Push your changes to your forked repository:

   ```bash
   git push origin feature-name
   ```

5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using **Password Generator**! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
```

### Notes:
1. Replace `https://github.com/FernandoAbishai/password-generator.git` with your actual GitHub repository link if needed.
2. The structure reflects what is seen in your repository from the image (`index.js`, `package.json`, etc.).
