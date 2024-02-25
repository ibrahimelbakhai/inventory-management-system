import React, { useState } from "react";
import { Box, Heading, Button, Input, FormControl, FormLabel, Table, Thead, Tbody, Tr, Th, Td, VStack } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", quantity: "", unit: "" });

  const handleNewProductChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const addNewProduct = () => {
    setProducts([...products, { ...newProduct, quantity: parseInt(newProduct.quantity) }]);
    setNewProduct({ name: "", description: "", price: "", quantity: "", unit: "" });
  };

  return (
    <Box p={4}>
      <Heading mb={6}>Product Management</Heading>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Product name" name="name" value={newProduct.name} onChange={handleNewProductChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input placeholder="Product description" name="description" value={newProduct.description} onChange={handleNewProductChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Quantity</FormLabel>
          <Input placeholder="Product quantity" name="quantity" type="number" value={newProduct.quantity} onChange={handleNewProductChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Unit</FormLabel>
          <Input placeholder="Unit of measure" name="unit" value={newProduct.unit} onChange={handleNewProductChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <Input placeholder="Product price" name="price" value={newProduct.price} onChange={handleNewProductChange} />
        </FormControl>
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={addNewProduct}>
          Add Product
        </Button>
      </VStack>
      <Table variant="simple" mt={10}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Quantity</Th>
            <Th>Unit</Th>
            <Th isNumeric>Price</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, index) => (
            <Tr key={index}>
              <Td>{product.name}</Td>
              <Td>{product.description}</Td>
              <Td>{product.quantity}</Td>
              <Td>{product.unit}</Td>
              <Td isNumeric>{product.price}</Td>
              <Td>
                <Button leftIcon={<FaEdit />} colorScheme="yellow" size="sm">
                  Edit
                </Button>
                <Button leftIcon={<FaTrash />} colorScheme="red" size="sm" ml={2}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
