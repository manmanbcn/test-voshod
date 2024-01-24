export const fetchList = async (page) => {
  const response = await fetch(`https://taxivoshod.ru/testapi/?w=list&page=${page}`);
  if (!response.ok) throw new Error('Network response was not ok');
  const data = await response.json();
  return data.items; 
};

export const fetchItem = async (id) => {
  const response = await fetch(`https://taxivoshod.ru/testapi/?w=item&id=${id}`);
  if (!response.ok) throw new Error('Network response was not ok');
  const data = await response.json();
  return data; 
};