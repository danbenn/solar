import { AppBar, Box, Card, CardContent, Grid, Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

function createData(
    name: string,
    timestamp: number,
    output: number,
) {
    return { name, timestamp, output };
}

const rows = [
    createData('Panel #1', 159, 6.0),
];

export function OperatorDashboard() {
    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        ☀️ Aware Solar
                    </Toolbar>
                </AppBar>
            </Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Card sx={{ maxWidth: 500, marginTop: 4 }}>
                            <CardContent>
                                <Typography variant="h6" component="h6">
                                    Historical Power Output (KWh)
                                </Typography>
                                <VictoryChart
                                    theme={VictoryTheme.material}
                                >
                                    <VictoryLine
                                        style={{
                                            data: { stroke: "#c43a31" },
                                            parent: { border: "1px solid #ccc" }
                                        }}
                                        data={[
                                            { x: 1, y: 2 },
                                            { x: 2, y: 3 },
                                            { x: 3, y: 5 },
                                            { x: 4, y: 4 },
                                            { x: 5, y: 7 }
                                        ]}
                                    />
                                </VictoryChart>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 500, marginTop: 4 }}>
                            <CardContent>
                                <Typography variant="h6" component="h6">
                                    Current Output (KWh)
                                </Typography>
                                <Typography >
                                    <b>1,460 KWh</b>

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <TableContainer component={Paper} sx={{ marginTop: 2, marginBottom: 4 }}>
                <Typography variant="h6" component="h6" sx={{ marginTop: 2, marginLeft: 2 }}>
                                        Individual Solar Panels
                                </Typography>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Solar Panel</TableCell>
                                <TableCell align="right">Last Seen At</TableCell>
                                <TableCell align="right">Output (KWh)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.timestamp}</TableCell>
                                    <TableCell align="right">{row.output}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </React.Fragment>
    );
}