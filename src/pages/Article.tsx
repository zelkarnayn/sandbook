import React from 'react';
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from "@mui/material";
import {yellow} from "@mui/material/colors";
import {BookmarkAdd, Favorite, Share} from "@mui/icons-material";

function Article():React.JSX {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader avatar={
                <Avatar sx={{bgcolor: yellow[500]}} aria-label={'recipe'}>
                    JS
                </Avatar>
            }
            action={
                <IconButton aria-label={'bookmark'}>
                    <BookmarkAdd/>
                </IconButton>
            }
            title="Типы данных в Js"
                        subheader="30 Декабрь, 2023"
            />
            <CardMedia
            component="img"
            height="194"
            image='https://stihi.ru/pics/2014/07/31/3953.jpg'
            />
            <CardContent>
                <Typography variant={"body2"} color={"text.secondary"}>
                    В JavaScript существует восемь типов данных: числа (number), строки (string), логические значения (boolean), null (отсутствие значение), undefined (не определенное значение), большие числа (BigInt), а также объект (object) и символ (symbol).
                    В JavaScript тип переменной определяется в момент присвоения этой переменной какого-либо значения.
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="add-to-favorite">
                    <Favorite/>
                </IconButton>
                <IconButton aria-label="share">
                    <Share/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Article;