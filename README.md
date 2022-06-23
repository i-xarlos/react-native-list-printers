# React Native Windows (Test app)

Guide [https://microsoft.github.io/react-native-windows/]

## 1. Check if your system have all tools installed

- Run PS as Administrator

  `Set-ExecutionPolicy Unrestricted -Scope Process -Force; iex (New-Object System.Net.WebClient).DownloadString('https://aka.ms/rnw-deps.ps1')`

## 2. Set your Visiual Studio Code (user/settings.json) | Optional

- autoformat with prettier and fix slint rules

  `{"editor.defaultFormatter": "esbenp.prettier-vscode", "editor.codeActionsOnSave": { "source.fixAll": true }}`

## 3. Basic steps

- `yarn install`
- `npx react-native run-windows`
