## 使用vite构建(npm create vite)



### vite.config.ts

```ts
export default defineConfig({
  plugins: [vue()],
  // 配置项目别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src")
    },
  },
})
```





### tsconfig.json

```json
//配置 @
"baseUrl": ".",
"paths": {
	"@/*": ["src/*"]
}
```





## 使用vue3脚手架构建(npm init vue)



### jsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

