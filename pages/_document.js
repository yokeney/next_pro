import Docuemnt, {Html, Head, Main, NextScript } from "next/document";
import {ServerStyleSheet} from 'styled-components';
function withLog(Comp){
  return props=>{
    console.log(props)
    return <Comp {...props}></Comp>
  }
}
class MyDocument extends Docuemnt {
 // 获取App原本的功能实现
  static async getInitialProps(ctx){
    const originRenderPage=ctx.renderPage;
    ctx.renderPage=()=>
    originRenderPage({
      enhanceApp:App=>withLog(App),
      enhanceComponent:Component=>withLog(Component)
    })
    const props = await Docuemnt.getInitialProps(ctx);
    return {
      ...props
    }
  }
  render() {
    return (
      <Html>
        <Head />
          <body>
            <Main />
            <NextScript />
          </body>
      </Html>
    )
  }
}
export default MyDocument
