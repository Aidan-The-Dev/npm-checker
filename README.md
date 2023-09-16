# NPM Package Name Checker

This Node.js script allows you to check if a specific npm package name already exists on npmjs.com or if there are similar package names available. It uses the npm API to perform this check.

## Prerequisites

Before you can use this script, make sure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

## Installation

1. Clone this repository to your local machine or download the script directly.

2. Open your terminal and navigate to the project directory.

3. Install the required dependencies using npm:

   ```bash
   npm install node-fetch@2.7.0

## Usage

To check if an npm package name exists or if there are similar package names, follow these steps:

Open the index.js file in a text editor.

Replace 'your-package-name' with the package name you want to check in the following line:

```javascript
const packageName = 'your-package-name'
```

Save the changes to the file.

In your terminal, navigate to the project directory.

Run the script using the following command:

```bash
node index.js
```



The script will then perform the check and provide you with the results.

## Example

Let's say you want to check if the package name "my-awesome-package" is available. You would replace 'your-package-name' with 'my-awesome-package' in the index.js file and then run the script. If the package exists, it will display information about the existing package; otherwise, it will inform you that the package is available.

## Author

aidanthedev#0 on discord

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
