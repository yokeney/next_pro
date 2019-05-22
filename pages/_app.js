import App, { Container } from 'next/app'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'
class MyApp extends App {
    state = {
      context: 'value',
    }
  static async getInitialProps(ctx) {
    // 获取App原本的功能实现
    const { Component } = ctx
    console.log('app init')
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps,
    }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
              <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp
