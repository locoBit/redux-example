import React, { Fragment } from 'react';
import AppBar from './../appBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './styles.css';

function Page(props) {
  const {
    results,
    goTo
  } = props;

  return (
    <Fragment>
      <CssBaseline/>
      <AppBar/>
      <div className='results-page'>
        {
          results.length ?
            results.map(item =>
              <div key={item.id} className='card-container' >
                <Card
                  className='card'
                  onClick={ () => goTo(`/details/${item.id}`) }
                >
                  <CardActionArea>
                    <CardMedia className='card-media' image={ item.image } title={ item.title }/>
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='h2'>
                        { item.title }
                      </Typography>
                      <Typography component='p'>
                        { item.content }
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            )
          :
          <Typography variant='h5' component='h3' className='page-message'>
            There are not results
          </Typography>
        }
      </div>
    </Fragment>
  );
}

export default Page;
