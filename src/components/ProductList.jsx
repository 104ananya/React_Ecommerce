import React from 'react'
import { useFilterContext } from '../context/filterContext'
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {

  const {filter_products, list_view} = useFilterContext();

  if(list_view === true){
    return <ListView products = {filter_products}/>
  }

  if(list_view === false){
    return <GridView products = {filter_products} />
  }
}

export default ProductList