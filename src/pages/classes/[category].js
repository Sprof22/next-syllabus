import React from "react";

function ClassItem({ items, category }) {
  return (
    <div>
      <h1>Welcome to {category} Category</h1>
      {items.map(item => {
        return (
          <div>
            {item.id} {item.name} {item.price}
          </div>
        )
      })}
    </div>
  );
}

export default ClassItem;

export async function getServerSideProps(context) {
  const { params } = context;
  const {category} = params;

  const response = await fetch(
    `http://localhost:3004/classes?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      items: data,
      category,
    },
  };
}
