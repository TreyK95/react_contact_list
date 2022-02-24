import { Button, Table, } from "semantic-ui-react";
import React from 'react';

const Contact = ({ name, phone }) => (
 <Table.Row>
   <Table.Cell>{name}</Table.Cell>
   <Table.Cell>{phone}</Table.Cell>
   <Table.Cell>
     <Button color="blue">
       Delete
     </Button>
   </Table.Cell>
 </Table.Row>
);

export default Contact;
