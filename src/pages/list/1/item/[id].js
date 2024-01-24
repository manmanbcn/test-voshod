import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchItem } from '../../../../api/apiFunctions';
import ModalComponent from '../../../../components/ModalComponent';

const ItemPage = () => {
  const router = useRouter();
  const { id, page } = router.query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id) {
      fetchItem(id).then(data => {
        if (data.result === 1) {
          setItem(data);
        } else {
          console.error("Элемент не найден");
        }
      }).catch(error => {
        console.error("Ошибка при запросе к API:", error);
      });
    }
  }, [id]);

  return item && <ModalComponent item={item} />;
};

export default ItemPage;