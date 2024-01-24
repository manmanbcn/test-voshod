import React from 'react';
import Link from 'next/link';
import { ListItem, ListItemText } from '@mui/material';

const ListItemComponent = ({ item }) => (
  <ListItem button component={Link} href={`/list/1/item/${item.id}`}>
    <ListItemText primary={item.name} />
  </ListItem>
);

export default ListItemComponent;