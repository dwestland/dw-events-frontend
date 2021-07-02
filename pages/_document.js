import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  // Adds to all documents:
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* Add ID for modal */}
          <div id='modal-root'></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
