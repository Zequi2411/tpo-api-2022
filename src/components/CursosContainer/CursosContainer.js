import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CursoCard from '../CursoCard/CursoCard';
import data from '../CursosSearch/mockData';

/* const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
})); */

export default function CursosContainer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} marginBottom={2}>
                {
                    data.map(product => (
                        <Grid xs={12} sm={6} md={4} lg={3}>
                            <CursoCard key={product.id}
                            title={product.title}
                            materia={product.materia}
                            ubicacion={product.ubicacion}
                            tipo={product.tipo}
                            frecuencia={product.frecuencia}
                            price={product.price}
                            image={product.image}
                            id={product.id}
                            description={product.description}
                            rating={product.rating} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}
//product={product}