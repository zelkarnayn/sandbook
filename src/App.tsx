import JSarticle from "./components/JSarticle";
import AddJsArticles from "./components/AddJsArticles";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { useContext, useEffect } from "react";
import { Context } from "./main";
import { observer } from "mobx-react-lite";
import { Grid } from "@mui/material";
import Article from "./pages/Article.tsx";

function App():JSX.Element {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  return (
    <>
      <Grid container direction="column" style={{ minHeight: "100vh" }}>
        <Header />
        {store.isAuth ? <h3>Вы авторизованы</h3> : <h3>Авторизуйтесь</h3>}
        <Grid item xs style={{ flexGrow: 1, padding: 10 }}>
          <Routes>
            <Route path="/contactUs" element={<Contact />} />
            <Route path="/aboutCreators" element={<About />} />
            <Route path="/addArticles" element={<AddJsArticles />} />
            <Route path="/JsArticles" element={<JSarticle />} />
          </Routes>
        <Article/>
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default observer(App);
