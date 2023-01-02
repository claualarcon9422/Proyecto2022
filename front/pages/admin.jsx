import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Container, Stack,Button,ButtonGroup ,Heading,Card, CardHeader, CardBody,StackDivider,Box,Text,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    SimpleGrid,
    TableContainer,
    Flex,
    Center,
  } from '@chakra-ui/react'
//import registro from '../../backend/models/registro'


const perfilAdmin =()=>{

    const [Registros, setRegistros] = useState([])
    const router = useRouter()

    const getallRegistro = async () => {
        const response = await axios.get(`${process.env.url}/registro/ver`)
        setRegistros(response.data)
    }

    useEffect(() => {
        getallRegistro()
    }, [])


    const showregistro = () => {
    
        return Registros.map(Registro => {
            return (
                        <Card my={6} mx={3}>
                            <CardHeader>
                                <Heading size='md'>Informe</Heading>
                                <Text pt='2' fontSize='sm'>{Registro.Informe}</Text>
                            </CardHeader>
                            <CardBody>
                                <Stack divider={<StackDivider />} spacing='3'>
                                    <Box>
                                        <Heading size='xs'>Registro</Heading>
                                        <Text pt='3' fontSize='sm'>{Registro._id}</Text>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>Fecha</Heading>
                                        <Text pt='3' fontSize='sm'>{Registro.fecha}</Text>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>Supervisado por:</Heading>
                                        <Text pt='2' fontSize='sm'>{Registro.administrador}</Text>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>Ejecutado por:</Heading>
                                        <Text pt='2' fontSize='sm'>{Registro.Empresa}</Text>
                                    </Box>
                                    <Stack direction='row' spacing={4}>
                                        <Button colorScheme='teal' variant='solid'>Notificar</Button>
                                        <Button colorScheme='teal' variant='solid'>Borrar</Button>
                                    </Stack>
                                </Stack>
                            </CardBody>
                        </Card>
            )
        })
    }
    return(
        <Container maxW="container.xl">
            <Heading my={50} textAlign={"Center"}>Dashboard</Heading>
            <Flex textAlign={"center"} border='1px' borderColor={'GrayText'} borderRadius={'3xl'}>
                {showregistro()}
            </Flex>
            <Button colorScheme={"telegram"} my={3}>Crear resgistro</Button>
        </Container>
        /*
        <Container maxW="container.xl" centerContent>
            <Heading textAlign={"center"} my={10}>Productos</Heading>
            <Button colorScheme="teal" onClick={() => router.push('/producto/crear')}>Crear Producto</Button>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Td>Nombre</Td>
                        <Td>Precio</Td>
                        <Td>Stock</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {showregistro()}
                </Tbody>
            </Table>
        </Container>*/
    )
}

export default perfilAdmin