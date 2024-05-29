### 在vscode下载 live sass插件

**配置settings.json**

```json
{
  "liveSassCompile.settings.generateMap": true,
  "liveSassCompile.settings.autoprefix": [
    
    "> 1%", "last 2 versions"],
  "liveSassCompile.settings.excludeList": ["**/node_modules/**", ".vscode/**"],
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".min.css",
      "savePath": "~/../css/"
    }
  ],
  "files.autoSave": "onFocusChange",
  "[css]": {
    "editor.defaultFormatter": "vscode.css-language-features"
  },
  "[scss]": {
    "editor.defaultFormatter": "vscode.css-language-features"
  }
}

```

