import { FlatList } from 'react-native';

import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';

    

export default function MenueScreen() {
  return (
   
   
   <FlatList
  data={products}
  renderItem={({ item }) => <ProductListItem product={item} />}
  numColumns={2}
  contentContainerStyle={{ gap: 10, padding: 10 }}
  columnWrapperStyle={{ gap: 10 }}
/>
   
      
  );}