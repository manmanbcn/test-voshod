import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchList } from '../../api/apiFunctions';
import { Button, List, Box, Typography } from '@mui/material';
import ListItemComponent from '../../components/ListItemComponent';
import '../../styles/globals.css';

const ListPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const [items, setItems] = useState([]);
  const [noDataError, setNoDataError] = useState(null);

  useEffect(() => {
    if (page) {
      fetchList(page).then(data => {
        setItems(data);
        setNoDataError(data.length === 0);
      });
    }
  }, [page]);

  const styleOuter = {
    display: "flex",
    justifyContent: "center",
  };

  const styleInner = {
    bgcolor: 'background.paper',
    borderRadius: '4px',
    maxWidth: 1140,
    minWidth: 330,
    flexGrow: 1, 
  };

  return (
    <Box sx={styleOuter}>
      <Box sx={styleInner}>
        <List>
          {items.map(item => (
            <ListItemComponent key={item.id} item={item} />
          ))}
        </List>
        {noDataError && (
          <Typography color="error" textAlign="center">
            Элементы не найдены.
          </Typography>
        )}
        {page == 1 ? 
          <Button href={`/list/${parseInt(page) + 1}`}>Вперед</Button> :
          <Button href={`/list/${parseInt(page) - 1}`}>Назад</Button>}
      </Box>
    </Box>
  );
};

export default ListPage;