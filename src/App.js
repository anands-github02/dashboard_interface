import logo from './logo.svg';
import './App.css';
import { Box, Center, Divider, Spacer } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';

function App() {
  return (
    <Box display='flex' color={'white'}>
     <Sidebar />
     <Layout />
    </Box>
  );
}

export default App;
