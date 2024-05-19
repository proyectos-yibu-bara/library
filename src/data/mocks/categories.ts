import { ICategory, ICategoryData } from '../../interfaces/category';
export const categoriesMock: ICategory[] = [
  {
    id: 1,
    title: "title 1",
    active: true,
  },
  {
    id: 2,
    title: "title 2",
    active: false,
  },
  {
    id: 3,
    title: "title 3",
    active: true,
  },
];

export const pushNewCategory = (data: ICategoryData): ICategory => {
   // Verifica si el título ya existe
   const titleExists = categoriesMock.some(item => item.title === data.title);
   if (titleExists) {
     return undefined;
   }

   // Encuentra el último ID y suma uno
  const lastId = categoriesMock.reduce((maxId, item) => Math.max(maxId, item.id), 0);
  const newId = lastId + 1;

  // Crea el nuevo objeto y agrégalo a la lista
  const newItem: ICategory = { id: newId, ...data };
  categoriesMock.push(newItem);

  return newItem;
};
