import './App.css';
import Layout from './components/Layout'

function App({Component, pageProps}) {
  return (
    <div className="App">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default App;
