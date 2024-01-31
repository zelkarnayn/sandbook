import React, { useState } from "react";
import { useArticles } from "../state/JSarticle.store";
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputBase,
  IconButton,
  InputLabel,
  Input,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { file } from "@babel/types";


//  title, text, author, category
function AddJsArticles() {
  const addArticles = useArticles((state) => state.addArticles);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState(1);
  const [category, setCategory] = useState(1);

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChangeFile = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addArticles(title);
    setText("");
    setTitle("");
    setImage("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>

        <Grid container spacing={2} alignItems={"center"}>

          <Grid item md={5}>
            <Select
              value={category}
              onChange={handleChangeCategory}
              name="Category"
            >
              <MenuItem value={1}>JavaScript</MenuItem>
              <MenuItem value={2}>React JS</MenuItem>
              <MenuItem value={3}>Vue 3</MenuItem>
            </Select>
          </Grid>
         
          <Grid item md={8}>
            <TextField
              style={{ width: "70%" }}
              id="outlined-basic"
              label="Заголовок"
              variant="outlined"
              value={title}
              onChange={handleChangeTitle}
            />
          </Grid>


          <Grid item md={8}>
            <TextField
              style={{ width: "70%" }}
              id="outlined-basic"
              label="Описание"
              variant="outlined"
              value={text}
              onChange={handleChangeText}
            />
          </Grid>

          <Grid item md={8}>
            <label htmlFor="file-input">
              <Input
                type="file"
                id="file-input"
                onChange={handleChangeFile}
                style={{ display: "none" }}
              />
              <Button variant="outlined" component="span">
                Выберите файл
              </Button>
            </label>
            <Button  sx={{ml:53}} variant="outlined">
              Отправить
            </Button>
              </Grid>
        </Grid>
      </form>
    </>
  );
}

export default AddJsArticles;



