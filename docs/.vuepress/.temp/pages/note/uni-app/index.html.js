import comp from "C:/Users/pzj/Desktop/university code/code_resourse/program/my-docs/docs/.vuepress/.temp/pages/note/uni-app/index.html.vue"
const data = JSON.parse("{\"path\":\"/note/uni-app/\",\"title\":\"uni-app\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"note/uni-app/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
