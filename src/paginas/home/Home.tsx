import React from 'react' 
import {Grid, Paper} from '@material-ui/core'//grid estrutura e layout , posição das coisas na tela
import {Box, Button} from '@mui/material'
import './Home.css'

function Home(){ 
    return( //toda função tem um retorno //Grid*2 para multiplicar comando
    <>  
      <Paper>
        <Box p={2}>
            <Box display="flex" justifyContent="center">
                 <h1>Titulo</h1>
            </Box>
            <img src="https://seriesbrasil.com.br/wp-content/uploads/2021/04/guardioes-da-galaxia-3-james-gunn.png" alt="Logo React" style={{width: "100%", height: "100%"}}/>
            <Box display="flex" justifyContent="cente" p={2}>
                <Button variant='contained' color="primary">Aceitar</Button>
                <Button variant='contained' color="secondary">Recusar</Button>
            </Box>
        </Box>

      </Paper>
    
     </> //funciona como uma div
    )
}

export default Home; 