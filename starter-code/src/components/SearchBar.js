import React from 'react';

const ProductRow = ({onSearch}) => {
  return (
    <form>
    <div class="form-group mt-3">
      <label for="exampleInputEmail1">Search</label>
      <input type="text" class="form-control" 
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
    <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Only show products in stock</label>
  </div>
  </form>
  )
}

export default ProductRow;