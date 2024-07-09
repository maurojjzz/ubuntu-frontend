import { useContext } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CustomCard from '../../cards/MicroEmpCard';
import { SearchContext } from '../../shared/SearchContext';
import Navbar from '../../navbar/Navbar';
import SearchBar from '../../searchBar/SearchBar';


const SearchResults = () => {
    const { searchResults } = useContext(SearchContext);

    return (
        <>
            <Navbar />
                <Box sx={{ marginTop: '2vh', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                <SearchBar />
                    <Typography variant='h6'>Resultados de tu búsqueda</Typography>
                {searchResults.length > 0 ? (
                    <Grid container spacing={2}>
                        {searchResults.map((result, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <CustomCard
                                    images={result.images}
                                    title={result.title}
                                    subtitle={result.subtitle}
                                    category={result.category}
                                    location={result.location}
                                    details={result.descriptions}
                                    moreInf={result.moreInformation}
                                />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Typography variant="h6">No results found</Typography>
                )}
            </Box>
        </>
    );
};

export default SearchResults;