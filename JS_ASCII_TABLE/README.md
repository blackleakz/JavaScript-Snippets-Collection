
# ascii-table JavaScript Docs

```
Author: BlackLeakz

Description: Here you'll learn how to create a ascii-table in JavaScript!"
```

1. What do you need for this Tutorial?!

```
- [] Node.JS (LTS||Current)
- [] Texteditor (I'd preferre Visual Studio Code)
- [] CommandLine

```

2. Downloads:

- [Node.JS](https://nodejs.org/de/download)
- [VSCode](https://code.visualstudio.com/download)

```
If you dont want to use the integrated terminal in VSCODE or just the cmd.exe/powershell you can use a different CLI such as : 
```
- [Cmder](https://cmder.app/)

- Windows Downloads via CLI- WINGET:
```
winget install Microsoft.VisualStudioCode
winget install OpenJS.NodeJS
winget install Git.Git
```

- Linux Downloads via CLI - APT:

```
sudo apt-get install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
rm -f packages.microsoft.gpg
sudo apt install apt-transport-https
sudo apt update
sudo apt install code

sudo apt-get install -y npm;
sudo apt-get install -y node.js;
sudo apt-get install -y nodejs;  # or
```

- Linux Downloads VIA CLI - PACMAN:
```
sudo pacman -Syu
sudo pacman -Sy node.js npm yarn;
```


3. Create a Folder and open it in VSCode or an Explorer!
4. Open the Terminal/CommandLine and cd into the folder !
5. Run this command to create the package.json file:
```
npm init -y

```

6. Run this command to install ascii-table module:
```
npm i ascii-table
```

7. Create a test.js - file and enter this:
```
const ascii = require("ascii-table");
const table = new ascii().setHeading('Test', 'Version');

table.addRow("This is a Test", "v.0.0.1");
console.log(table.toString(), "\nTest ascii-table created");
```

8. Run this command in the CommandLine to run the file:

```
node test.js
```

9. The output should be following:

```
.--------------------------.
|      Test      | Version |
|----------------|---------|
| This is a Test | v.0.0.1 |
'--------------------------'
Test ascii-table created
```
