import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
function Products(props){
    return(
        <div>
            <Card>
                <CardHeader
                avatar={
                    <Avatar aria-label="Logo de la empresa" src={props} />
                }
                action={
                    <IconButton aria-label="">
                    <MoreVertIcon />
                    </IconButton>
                }
                title={props}
                subheader={props}
                />
                <CardMedia
                  title=""
                  image={props}
                />
                <CardContent></CardContent>
                <Typography variant="h3">{props}</Typography>
            </Card>
        </div>
    )
}

export default Products;